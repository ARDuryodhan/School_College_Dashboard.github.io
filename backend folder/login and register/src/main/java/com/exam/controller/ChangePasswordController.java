package com.exam.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.exam.dto.ChangePasswordDto;
import com.exam.services.ChangePasswordService;


@RestController
//@CrossOrigin("*")
public class ChangePasswordController {
	
	 @Autowired
	  private ChangePasswordService changePasswordService;
	    
	 
	 private static final Logger logger = LoggerFactory.getLogger(ChangePasswordController.class);
	    
	 @RequestMapping(value = "changePassword",method = RequestMethod.PUT)
	 public ResponseEntity<String> changePassword(@RequestBody ChangePasswordDto changePasswordDto) 
	 {
	        logger.info("Received request from UI to change password for user: {}", changePasswordDto.getUsername());
	       
	        try 
	        {
	            String response = changePasswordService.changePassword(changePasswordDto);
	            return new ResponseEntity<>(response, HttpStatus.OK);
	        } 
	        catch (Throwable e) 
	        {
	            logger.error("Unexpected error while changing password: {}", e.getMessage());
	            return new ResponseEntity<>("Unexpected error occurred", HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	 }
}
