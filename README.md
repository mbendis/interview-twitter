# interview-twitter

## Basic info 
This project is used for testing candidates through implementing features on simplified Twitter clone app.

Only basic skeleton is implemented and is left to candidate to implement specific feature.

## Demo users

There are several users and faked tweets inserted in the system as bootstrap data. 
To have this app more interesting to work on, all the users are very famous in cryptocurrency world that is getting a lot of traction lately.

## Project structure

Project is divided into REST and UI part.
REST part is implemented with Java and Spring Boot and UI part with Angular 5.
Each part is in separate project in this repository.

## Starting the application
To start REST service, navigate to `interview-twitter-rest` and execute `./mvnw spring-boot:run` if running on *nix OS system.
If running on Windows, execute `mvnw.cmd spring-boot:run`.

To start UI, make sure `yarn` is installed on your system (version 1.3.2). 
Run the `yarn` command after cloning the project in order to download dependencies.
Then go to `interview-twitter-ui` and execute `yarn start` and navigate in browser to `http://localhost:4200`. 
More details are available in UI project README file.

## Base implementation features

Implemented features should be easily understable from source code but here's the quick summary:

- Login
- Create a tweet
- Overview of all the following users tweets
- View of users own tweets
- View following users
- View followers
