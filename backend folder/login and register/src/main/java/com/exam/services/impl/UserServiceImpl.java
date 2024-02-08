package com.exam.services.impl;

import com.exam.model.User;
import com.exam.model.UserRole;
import com.exam.repositories.RoleRepository;
import com.exam.repositories.UserRepository;
import com.exam.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;
@Service
public class UserServiceImpl implements UserService {
    
	@Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    
    
    @Override
    public User createUser(User user, Set<UserRole> userRoles) throws Exception {
        User local = this.userRepository.findByUsername(user.getUsername());
        if(local!=null){
            System.out.println("User is already there!");
            throw new Exception("User is already present!");
        }else {
            for (UserRole ur : userRoles){
                roleRepository.save(ur.getRole());
            }
            user.getUserRoles().addAll(userRoles);
            local = this.userRepository.save(user);
        }
        return local;
    }
//getting user by username
    @Override
    public User getUser(String username) {
        return this.userRepository.findByUsername(username);

    }

    @Override
    public void deleteUser(Long userId) {
         this.userRepository.deleteById(userId);

    }


}
