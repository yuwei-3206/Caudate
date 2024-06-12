# to run the project use npm install

# Design and Purpose

This app is designed to help improve your concentration and focus. This app is a game involving a “Schulte Table”. Schulte tables have been used in psychoanalysis to study the attention of patients. This app has three different levels of Schulte tables in which the user needs to select the numbered grid items in the correct order as fast as possible.

The app includes a backend implementation for users to share their scores via a MongoDB database. The initial release includes the capability for leaderboards across the three different levels but might include messaging in the future.

# Screenshots

![Screenshot_20240602-175912](https://github.com/msimio/670Project/assets/137801161/ece42ada-bd4b-46f0-8289-025600ae1be3)
![Screenshot_20240602-175917](https://github.com/msimio/670Project/assets/137801161/baa4bd80-f300-465d-8e1a-6ab1eab2f23a)
![Screenshot_20240602-175922](https://github.com/msimio/670Project/assets/137801161/c3cd2f3b-df97-48df-bc55-a3252b3982aa)
![Screenshot_20240602-175927](https://github.com/msimio/670Project/assets/137801161/bd8ef3e0-2a9b-4f9e-be77-c2ac07b7c1c4)

# Server API Design

Our backend was implemented using a combination of MongoDB and Express. We created two databases, one for users and one for scores. When the user reaches the level select screen, a random username is generated for the user. We used async storage to confirm that the user did not already exist and then use POST to add the user to a localhost endpoint. After the user completes the game and gets their score, we use POST to add an entry to the scores database containing the parameters username, score and difficulty level.

# Experiences

The initial front end prototype was implemented in React Native. We were able to improve the logic used to track the grid button presses, improve the visual look of the grid and add colored tracking to indicate which number should be pressed next. Challenges arose when trying to implement a splash screen for loading and add custom fonts. The backend integration involved challenging issues like when to create a new user. We used AsyncStorage to check if a user was already created and if not, we assigned the user a random username.


