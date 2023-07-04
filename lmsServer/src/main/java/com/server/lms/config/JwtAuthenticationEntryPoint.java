package com.server.lms.config;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import javax.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {


    @Override
    public void commence(HttpServletRequest request, javax.servlet.http.HttpServletResponse response,
            AuthenticationException arg2) throws IOException {
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED,"Unauthorized");
        
    }

}
