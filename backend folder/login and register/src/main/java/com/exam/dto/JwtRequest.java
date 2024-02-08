package com.exam.dto;

public class JwtRequest {
    String username;
    String password;
//none select contructor
    public JwtRequest() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    //all select contructor
    public JwtRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }
}
