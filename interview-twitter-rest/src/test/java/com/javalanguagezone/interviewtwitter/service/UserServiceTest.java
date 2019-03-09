package com.javalanguagezone.interviewtwitter.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserServiceTest {

  @Autowired
  private UserService userService;

  @Test(expected = UsernameNotFoundException.class)
  public void loadingUserWithUnknownUsername_UsernameNotFoundExceptionThrown() {
    userService.loadUserByUsername("unknownUser");
  }
}
