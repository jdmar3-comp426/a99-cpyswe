# Group Playthrough Demo

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/LOqO35ayVcM/0.jpg)](https://www.youtube.com/watch?v=LOqO35ayVcM)

# Pinball Game by group CPYSWE

Check the more specific explanation page for the game under /docs or follow the link
[Explanations Of The Game](/docs/explanations.md)

## Game Page

![Alt text](/images/gamePage.PNG "Game Page")
This is a pinball game, where the player can drag the brick at the bottom. When the blue ball hit on the brick, it will reflect to the other direction. There are a total of 60 bricks on the top of the page. When the ball hit the brick on the top, it will reflect and eliminate that brick. Each brick eliminated will award the player one point. When the ball reach the bottom line without hitting the brick, the game ends. The player has to log in first to start the game.

## Log In Page

![Alt text](/images/login.PNG "Log In Page")
This is the log in page. It provides the user the ability to create an account and log in. There is a bug when checking log in credential. If the user input is not correct, the page works fine and alter "bad credential." But if the username and password combination is correct, the brower will alert "bad credential" and then "log in successful." We couldn't figure out how to correct this. But it seems to be a minor problem. 

## User Page (After Logging In)

![Alt text](/images/userPage.PNG "User Page")
This is the user page. In this page, the user has the ability to register account, log out, delete account, start new game, check personal information, and modify the account. 

# Installation Instruction

## First, make sure you installed node.js on your computer; then, follow the steps.

## 1. Clone the repository.
Copy the URL for this repository and clone it in the terminal.

    - git clone https://github.com/jdmar3-comp426/a99-cpyswe.git

## 2. Open the folder in Visual Studio or open the terminal and forward into the folder.
    - cd a99-cpyswe

## 3. Make sure you are in the directory "a99-cpyswe" and install dependencies using "npm install"
    - npm install

## 4. In the treminal, run "npm run start"
    - npm run start

## 5. Your brower should automatically pop up a new window for the game. You are good to go!

# Dependency List

    "better-sqlite3": "^7.4.5",
    "browser-sync": "^2.27.7",
    "concurrently": "^6.4.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-session": "^1.17.2",
    "md5": "^2.3.0"

# Run/Play Instruction

## 1. Register an account.

## 2. Log in.

## 3. You can choose to directly start a new game or make modification to your account. 

## 4. Enjoy!

# Backend API Specification
See the link for more specific details. [API Endpoints](/docs/endpoint.md)

## /app/new/user
CREATE a new user (HTTP method POST) at endpoint /app/new/

Used when user register in front page.

## /app/users
READ a list of all users (HTTP method GET) at endpoint /app/users/

Used when testing, and check whether the register, modify, delete, and record score work.

## /app/user/:id
READ a single user (HTTP method GET) at endpoint /app/user/:id

Used when user getting their own information (Only shows username, email, and highestScore. Not including password).

## /app/update/user
UPDATE a single user (HTTP method PATCH) (the updated user is the current user that is logged in)

Used when user update information. Only username, email, and password. A user cannot modify their highestScore.

## /app/delete/user
DELETE a single user (HTTP method DELETE) (the deleted user is the current user that is logged in)

Used when user delete their account. Delete button only shows after logged in.

## /app/recordscore/user
UPDATE a single user's highest score (HTTP method PATCH) if the current score is higher than the highestScore in database (the updataed user is the current user that is logged in)

Used when a game ends, and the user trying to record their highest score.

## /app/login/user
READ a single user (HTTP method GET) given the username and password. If the returned json is empty, than we don't have the user information in the database, so bad credential. Otherwise, logged in.

Used when checking log in credentials.

# Group Planning 

Refer to this file under /docs for more specific information and other group planning [Group Planning](/docs/planning.md)

    - Taixi Lu: Backend API and Database(Server.js/form.js/database.js)

    - Panyi Chen: Front End Game Page Design

    - Yifan Zhou: Check And Connect Frontend to Backend 

    - Longtian Ye: Aesthetic Design: Make Page And Game Smooth (CSS framework)

    - Rongjie Wang: Front Page & User Page Design


