package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.service.UserService;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Collection;

@RestController
public class UserController {

  private UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/followers")
  public Collection<UserDTO> followers(Principal principal) {
    return userService.getUsersFollowers(principal);
  }

  @GetMapping("/following")
  public Collection<UserDTO> following(Principal principal) {
    return userService.getUsersFollowing(principal);
  }
}
