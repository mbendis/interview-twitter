package com.javalanguagezone.interviewtwitter.controller;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public abstract class RestIntegrationTest {

  @Autowired
  private TestRestTemplate testRestTemplate;

  TestRestTemplate withAuthTestRestTemplate() {
    return testRestTemplate.withBasicAuth("aantonop", "password");
  }

  String getUsernameOfAuthUser(){
    return "aantonop";
  }

  String[] followingUsers(){
    return new String[]{"rogerkver", "satoshiNakamoto", "SatoshiLite", "VitalikButerin"};
  }
}
