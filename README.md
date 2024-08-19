# React Axios-CRUD Task

## Functionalities

This React application provides the following key functionalities:

1. User Management:

-Display Users: Fetches and displays a list of users from the mock API using Axios.

-Add User: Allows users to add new entries to the user list via a form. The new user data is sent to the mock API and updated in the UI.

- Edit User: Provides an option to edit  user details.
  
-Delete User: Users can remove an entry from the list, with the deletion reflected both in the UI and the mock API.

2. State Management:

Context API: Manages global state for user data, allowing easy access and manipulation of user information across different components without prop drilling.

## Demo
Check out the live demo of the project [here](https://vibhooshana-axios-crud.netlify.app/)

## Folder Structure

React-axios/

├── public/

│   └── index.html

├── src/

│   ├── components/

│   │   ├── UserList.jsx

│   │   ├── AddUser.jsx

│   │   ├── Edit.jsx

│   │   ├── Navbar.jsx

│   ├── context/

│   │   ├──UserContext.jsx

│   ├── Api.js

│   ├── App.css

│   ├── App.jsx

│   ├── index.css

│   ├── index.js

├── .gitignore

├── package.json

├── README.md


## Project Setup

1. Set up your React application:

```bash

npx create-react-app react-axios
cd reactcontext-app

```
2. Install react-router-dom:

```bash

npm install react-router-dom

```
3. Install dependencies:
   
```bash
  npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/material @mui/styled-engine-sc styled-components
  npm install @fontsource/roboto
  npm install @mui/icons-material
```

4. Add Components

-`UserList.jsx`: Fetches and displays the list of users with options to edit or delete.

-`AddUser.jsx`: Handles the form for adding a new user, with the data being sent to the mock API.

-`Edit.jsx`: Handles editing an existing user’s details.

-`Navbar.jsx`: Provides navigation links for different sections of the app.

-`UserContext.jsx`: Manages the global state for users using React's Context API, facilitating state sharing across components.

-`Api.js`: Centralized file for making Axios requests to the mock API.
  

5. Set up Routing in App.jsx
   
-Purpose: Manages the different views in your application, like listing users, adding new users, and editing existing users.

-Setup:
-`/`: Maps to UserList component, displaying all users.

-`/add-contact`: Maps to AddUser component for adding a new user.

-`/edit/:id`: Maps to Edit component for editing a user, with the ID passed as a route parameter.

6. Run the development server:

To start the development server, use the following command:

```bash

npm start

```
  
7. Open your browser and navigate to http://localhost:3000 to see the application.

## Deployment

To deploy your application:

1. Build the project:

```bash
 npm run build

```

2. Deploy the `build` folder to Netlify.

## Acknowledgements

-React: For providing a powerful and flexible JavaScript library for building user interfaces.

-Axios: For simplifying HTTP requests and interacting with APIs.

-React Router: For enabling dynamic routing within the application.

-Material-UI: For providing pre-built, customizable UI components.

-Netlify: For hosting and deploying the application with ease.

-JSONPlaceholder: For offering a mock API to simulate CRUD operations during development.
