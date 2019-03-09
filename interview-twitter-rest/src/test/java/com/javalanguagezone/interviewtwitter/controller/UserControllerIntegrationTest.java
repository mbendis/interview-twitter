package com.javalanguagezone.interviewtwitter.controller;

import com.javalanguagezone.interviewtwitter.service.dto.UserDTO;
import org.junit.Test;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import static java.util.stream.Collectors.toList;
import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;

public class UserControllerIntegrationTest extends RestIntegrationTest {

  @Test
  public void followersRequested_allFollowersReturned() {
    ResponseEntity<UserDTO[]> response = withAuthTestRestTemplate().getForEntity("/followers", UserDTO[].class);
    assertThat(response.getStatusCode().is2xxSuccessful(), is(true));
    List<UserDTO> followers = Arrays.asList(response.getBody());
    assertThat(followers, hasSize(1));
    assertThat(extractUsernames(followers), contains("rogerkver"));
  }

  @Test
  public void getFollowingFromFirstPage() {
    ResponseEntity<UserDTO[]> response = withAuthTestRestTemplate().getForEntity("/following", UserDTO[].class);
    assertThat(response.getStatusCode().is2xxSuccessful(), is(true));
    List<UserDTO> following = Arrays.asList(response.getBody());
    assertThat(following, hasSize(4));
    assertThat(extractUsernames(following), containsInAnyOrder(followingUsers()));
  }


  private List<String> extractUsernames(List<UserDTO> users) {
    return users.stream().map(UserDTO::getUsername).collect(toList());
  }
}
