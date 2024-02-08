package com.exam.services.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.dto.ChangePasswordDto;
import com.exam.model.User;
import com.exam.repositories.UserRepository;
import com.exam.services.ChangePasswordService;

@Service
public class ChangePasswordImpl implements ChangePasswordService {
	
	@Autowired
    private UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(ChangePasswordService.class);

   
    private User validateChangePasswordDataDtoAndGetUserEntity(ChangePasswordDto changePasswordDto) throws Exception {
        if (changePasswordDto == null) {
            logger.error("Change Password request is empty: {}", changePasswordDto);
            throw new Exception("ChangePasswordDataDto object is empty");
        }

        if (changePasswordDto.getNewPassword() == null || changePasswordDto.getNewPassword().isEmpty()) {
            throw new Exception("New Password field is empty");
        }

        if (changePasswordDto.getUsername() == null || changePasswordDto.getUsername().isEmpty()) {
            throw new Exception("Username field is empty");
        }

        if (changePasswordDto.getCurrentPassword() == null || changePasswordDto.getCurrentPassword().isEmpty()) {
            throw new Exception("Current Password field is empty");
        }

        User user = userRepository.findByUsernameAndPassword(changePasswordDto.getUsername(), changePasswordDto.getCurrentPassword());

        if (user == null) {
            logger.error("Can't find User by username: {} and password: {}", changePasswordDto.getUsername(), changePasswordDto.getCurrentPassword());
            throw new Exception("Can't find User with username: " + changePasswordDto.getUsername() + " and password " + changePasswordDto.getCurrentPassword());
        }

        return user;
    }

	public String changePassword(ChangePasswordDto changePasswordDto) throws Exception {
		User user = validateChangePasswordDataDtoAndGetUserEntity(changePasswordDto);
        user.setPassword(changePasswordDto.getNewPassword());
        userRepository.save(user);
        return "Password Changed Successfully";
	}

}
