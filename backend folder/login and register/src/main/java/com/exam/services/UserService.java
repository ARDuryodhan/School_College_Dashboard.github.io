package com.exam.services;

import com.exam.model.User;
import com.exam.model.UserRole;


import java.util.Set;

public interface UserService {

    public User createUser(User user, Set<UserRole> userRoles) throws Exception;
public User getUser(String username);

//delete method
    public void deleteUser(Long userId);

}
