package com.javalanguagezone.interviewtwitter;

import com.javalanguagezone.interviewtwitter.domain.Tweet;
import com.javalanguagezone.interviewtwitter.domain.User;
import com.javalanguagezone.interviewtwitter.repository.TweetRepository;
import com.javalanguagezone.interviewtwitter.repository.UserRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Component;

@SpringBootApplication
public class InterviewTwitterApplication {

  public static void main(String[] args) {
    SpringApplication.run(InterviewTwitterApplication.class, args);
  }

  @Component
  public static class BootstrapBitcoinEvangelists implements ApplicationRunner {

    private UserRepository userRepository;
    private TweetRepository tweetRepository;

    public BootstrapBitcoinEvangelists(UserRepository userRepository, TweetRepository tweetRepository) {
      this.userRepository = userRepository;
      this.tweetRepository = tweetRepository;
    }

    @Override
    public void run(ApplicationArguments args) {
      User rogerVer = userRepository.save(new User("rogerkver", "password"));
      User andreasAntonopoulos = userRepository.save(new User("aantonop", "password"));
      User vitalikButerin = userRepository.save(new User("VitalikButerin", "password"));
      User charlieLee = userRepository.save(new User("SatoshiLite", "password"));
      User satoshiNakamoto = userRepository.save(new User("satoshiNakamoto", "password"));

      vitalikButerin.addFollowing(satoshiNakamoto, rogerVer);
      userRepository.save(vitalikButerin);

      rogerVer.addFollowing(satoshiNakamoto, andreasAntonopoulos);
      userRepository.save(rogerVer);

      andreasAntonopoulos.addFollowing(satoshiNakamoto, rogerVer, vitalikButerin, charlieLee);
      userRepository.save(andreasAntonopoulos);

      charlieLee.addFollowing(satoshiNakamoto, rogerVer, vitalikButerin);
      userRepository.save(charlieLee);

      tweetRepository.save(new Tweet("I created Bitcoin!", satoshiNakamoto));
      tweetRepository.save(new Tweet("I'm an alias", satoshiNakamoto));
      tweetRepository.save(new Tweet("Bitcoin cash is true Bitcoin!", rogerVer));
      tweetRepository.save(new Tweet("ETH is all about smart contracts", vitalikButerin));
      tweetRepository.save(new Tweet("Most of the ICO's will fail", andreasAntonopoulos));
      tweetRepository.save(new Tweet("Cryptocurrencies are all about disruption", andreasAntonopoulos));
      tweetRepository.save(new Tweet("Bitcoin mining is based on Proof of Work", andreasAntonopoulos));
      tweetRepository.save(new Tweet("If Bitcoin is  crypto gold then Litecoin is crypto silver.", charlieLee));
    }
  }
}
