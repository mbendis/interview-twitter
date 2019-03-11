package com.javalanguagezone.interviewtwitter.service.dto;

import com.javalanguagezone.interviewtwitter.domain.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static lombok.AccessLevel.PRIVATE;

@Getter
@NoArgsConstructor(access = PRIVATE)
public class UserDTO {
  private Long id;
  private String username;
  private Integer followersSize;
  private Integer followingSize;

  public UserDTO(User user) {
    this.id = user.getId();
    this.username = user.getUsername();
    this.followersSize = user.getFollowersSize();
    this.followingSize = user.getFollowingSize();
  }
}
