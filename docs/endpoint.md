# Endpoints

## /app/new/user
CREATE a new user (HTTP method POST) at endpoint /app/new/

Used when user register in front page.

## /app/users
READ a list of all users (HTTP method GET) at endpoint /app/users/

Used when testing, and check whether the register, modify, delte, and record score work.

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

# User Note

## Features Designed For Users:
    - Register:
        - Username
        - Email
        - Password

    - Log In:
        REQUIRE:
        - Username
        - Password

    - Modify Account:
        - Username
        - Email
        - Password
    
    - Delte Account
        - Can only delte after log in
    
    - Check Personal Information
        - Username
        - Email
        - Highest Score
    
    - Log Out
    
    - Start New Game


