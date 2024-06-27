# Caudate Game
## Design and Purpose

This app is designed to help improve your concentration and focus. This app is a game involving a “Schulte Table”. Schulte tables have been used in psychoanalysis to study the attention of patients. This app has three different levels of Schulte tables in which the user needs to select the numbered grid items in the correct order as fast as possible.

The app includes a backend implementation for users to share their scores via a MongoDB database. The initial release includes the capability for leaderboards across the three different levels.

## Screenshots

## Server API Design
## Front-end Technology
### React Native
Utilized for cross-platform mobile app development, ensuring a native-like experience on both iOS and Android devices.
### AsyncStorage
Handles local storage requirements for storing game data and user authentication tokens.
### Custom Components
Includes custom UI components like CustomText and CustomButton for consistent design and user interaction.

## Back-end Technology
### Node.js with Express
Powers the server-side logic for handling user authentication, game scores, and data persistence.
### MongoDB Atlas
Cloud-based MongoDB database used for storing user profiles, game scores, and other application data securely.
### RESTful API
Enables communication between the front end and back end, facilitating user login, game score storage, and retrieval.


