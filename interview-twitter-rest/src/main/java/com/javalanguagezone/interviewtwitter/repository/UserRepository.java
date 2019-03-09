package com.javalanguagezone.interviewtwitter.repository;

import com.javalanguagezone.interviewtwitter.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
  User findOneByUsername(String user);
}
