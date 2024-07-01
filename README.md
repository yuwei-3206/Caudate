# Caudate Game
## Design and Purpose

This app is designed to help improve your concentration and focus. This app is a game involving a “Schulte Table”. Schulte tables have been used in psychoanalysis to study the attention of patients. This app has three different levels of Schulte tables in which the user needs to select the numbered grid items in the correct order as fast as possible.

The app includes a backend implementation for users to share their scores via a MongoDB database. The initial release includes the capability for leaderboards across the three different levels.

## Screenshots
![S__138313731_0](https://github.com/yuwei-3206/Caudate/assets/122844465/08d4da9c-3eb7-48dc-ba26-125f58e6fe9f)
![S__138313733_0](https://github.com/yuwei-3206/Caudate/assets/122844465/575e0279-d145-4e12-9718-439521f31b99)
![S__138313734_0](https://github.com/yuwei-3206/Caudate/assets/122844465/33892b2f-da16-405d-9f75-d8bc38c2a061)
![S__138313735_0](https://github.com/yuwei-3206/Caudate/assets/122844465/9635d3e5-6c0e-49ca-bace-8b0d561f01e3)
![S__138313736_0](https://github.com/yuwei-3206/Caudate/assets/122844465/cd9f47d2-4f29-4baa-b46c-9c56e6223b2b)
![S__138313737_0](https://github.com/yuwei-3206/Caudate/assets/122844465/cdfd0e20-94dd-4ccc-a2e9-00e821f680ad)
![S__138313738_0](https://github.com/yuwei-3206/Caudate/assets/122844465/853f25b4-49ea-42cf-a8aa-ac3244a87f9b)

## Front-end Technology
- React Native: Utilized for cross-platform mobile app development, ensuring a native-like experience on both iOS and Android devices.
- AsyncStorage: Handles local storage requirements for storing game data and user authentication tokens.
- Custom Components: Includes custom UI components like CustomText and CustomButton for consistent design and user interaction.

## Back-end Technology
- Node.js with Express: Powers the server-side logic for handling user authentication, game scores, and data persistence.
- MongoDB Atlas: Cloud-based MongoDB database used for storing user profiles, game scores, and other application data securely.
- RESTful API: Enables communication between the front end and back end, facilitating user login, game score storage, and retrieval.


