package com.exam.controller;

import com.exam.config.JwtUtils;
import com.exam.dto.JwtRequest;
import com.exam.dto.JwtResponse;
import com.exam.exception.UserNotFoundException;
import com.exam.model.User;
import com.exam.services.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("*")
public class AuthenticationController {


    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    @Autowired
    private JwtUtils jwtUtils;


    //generate token
    @PostMapping("/generate-token-authentication")
    public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception {
        try {

            authenticate(jwtRequest.getUsername(), jwtRequest.getPassword());
        } catch (UserNotFoundException e){
            e.printStackTrace();
            throw new Exception("user not found ");

        }

        //////authenticate
        UserDetails userDetails = this.userDetailsService.loadUserByUsername(jwtRequest.getUsername());
        String token = this.jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }



    private void authenticate(String username, String password) throws Exception {

        try {

           authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));

        }catch (DisabledException e){
            throw new Exception("Use Disable"+e.getMessage());
        }catch (BadCredentialsException e){
            throw new Exception("bad credential"+ e.getMessage());
        }
    }

// return the current user details
 @GetMapping("/currentUser")
    public User getCurrentUser(Principal principal){

     return  (User)this.userDetailsService.loadUserByUsername(principal.getName());

 }
}
