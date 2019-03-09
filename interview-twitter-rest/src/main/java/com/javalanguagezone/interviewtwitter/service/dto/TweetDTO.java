package com.javalanguagezone.interviewtwitter.service.dto;

import com.javalanguagezone.interviewtwitter.domain.Tweet;
import lombok.*;

import static lombok.AccessLevel.PRIVATE;

@Getter
@NoArgsConstructor(access = PRIVATE)
public class TweetDTO {
  private Long id;
  private String content;
  private String author;

  public TweetDTO(Tweet tweet) {
    this.id = tweet.getId();
    this.content = tweet.getContent();
    this.author = tweet.getAuthor().getUsername();
  }
}
