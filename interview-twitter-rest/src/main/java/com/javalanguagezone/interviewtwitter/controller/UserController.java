package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.service.UserService;
import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import org.springframework.web.bind.annotation.*;


import java.security.Principal;
import java.util.Collection;

import static org.springframework.http.HttpStatus.CREATED;

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

  @RequestMapping("/registration")
  @PostMapping
  @ResponseStatus(CREATED)
  public UserDTO registration(@RequestParam("username") String username,
                              @RequestParam("password") String password,
                              @RequestParam("firstName") String firstName,
                              @RequestParam("lastname") String lastName,
                              Principal principal) {
    return userService.register(username, password, firstName, lastName); }

}
