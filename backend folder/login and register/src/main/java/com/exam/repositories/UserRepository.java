package com.exam.repositories;

import com.exam.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
    public User findByUsername(String username);
    
    User findByUsernameAndPassword(String username, String currentPassword);
}
