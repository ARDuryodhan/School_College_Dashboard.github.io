package com.exam.config;

import com.exam.services.impl.UserDetailsServiceImpl;

import org.apache.catalina.filters.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Order(200)
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SpringSecurityConfig extends WebSecurityConfigurerAdapter {
   
	
	@Autowired
    private JwtAuthenticationFilter jwtAuthenticationFilter;
    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;
    @Autowired
    private UserDetailsServiceImpl userDetailsServiceImpl;

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return super.authenticationManagerBean();
    }
    @Bean
    public PasswordEncoder passwordEncoder(){
      return NoOpPasswordEncoder.getInstance();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(this.userDetailsServiceImpl).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .cors()
                .disable()
                .authorizeRequests()
                .antMatchers("/generate-token-authentication","/user/create","/user/{username}",
                		     "/review/create","/review/getAllReview","/review/get/{id}","/review/delete/{id}","/review/update/{id}",
                	           "/query/create","/query/getAll",
                		      "/bank/addBank","/bank/getAllBank","/bank/getBank/{id}","/bank/deleteBank/{id}","/bank/updateBank/{id}",
                		      "/changePassword","/file/upload","/file/get/{id}", "/file/getAllFile").permitAll()
                .antMatchers(HttpMethod.OPTIONS).permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);


    }
    
//    @Bean
//    public FilterRegistrationBean corsfilter()
//    {
//    	
//    	
//    	UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
//    	
//    	CorsConfiguration corsConfiguration=new CorsConfiguration();
//    	corsConfiguration.setAllowCredentials(true);
//    	corsConfiguration.addAllowedOriginPattern("*");
//    	corsConfiguration.addAllowedHeader("Authorization");
//    	corsConfiguration.addAllowedHeader("Content-Type");
//    	corsConfiguration.addAllowedHeader("Accept");
//    	corsConfiguration.addAllowedMethod("GET");
//    	corsConfiguration.addAllowedMethod("POST");
//    	corsConfiguration.addAllowedMethod("DELETE");
//    	corsConfiguration.addAllowedMethod("PUT");
//    	corsConfiguration.addAllowedMethod("OPTIONS");
//    	corsConfiguration.setMaxAge(3600L);
//    	
//    	source.registerCorsConfiguration("/**", corsConfiguration);
//    	FilterRegistrationBean bean=new FilterRegistrationBean(new org.springframework.web.filter.CorsFilter((CorsConfigurationSource) source));
//		return bean;
//    	
//    }
}
