package com.exam.controller;

import com.exam.dto.UserDto;
import com.exam.model.Role;
import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

import javax.validation.Valid;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/create")
    public User createUser(@Valid @RequestBody User user) throws Exception {
//        user.setProfile("default.png");
    	
        UserDto userDto = new UserDto(); 
    	user.setProfile(userDto.getProfile());
        Set<UserRole> userRoles = new HashSet<>();
        Role role = new Role();
        role.setRoleId(50L);
        role.setRoleName("NORMAL");

        UserRole userRole = new UserRole();
        userRole.setUser(user);
        userRole.setRole(role);

        userRoles.add(userRole);

       return this.userService.createUser(user,userRoles);
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> getUser(@PathVariable("username") String username){
        return ResponseEntity.ok(userService.getUser(username));
    }
    @DeleteMapping("/{userId}")
    public void deleteUser(@PathVariable("userId") long userId){
        this.userService.deleteUser(userId);
    }

}
