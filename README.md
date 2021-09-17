
# Sportsgram

## What is Sportsgram?

 Sportsgram is a full Stack clone of Flicker, with also a feed inspired by instagram where user can find and share their favorite sports related stories.
 
 ## Project Structure Overview
 
 The backend of this app was built using Express with a postgreql database on the backend and React and Redux allow for smart management of data and components rerenders and continous navigation without the need of a page refreash. The RESTful API was design in harmony with the redux store to display on the page any change that the user might cause to the database. 
 
### Technologies Used

* Javascript
* React
* Redux
* express 
* Postgresql
 
# Main Features

## Login and User Signup

 One of the main features of the site is the ability of the user to create an account and be able to sign in . The users passwords are protected by being stored using bcrypt password hashing. In addition having an allows authorization and authentication for different features of the site. 

## Posts

 Another main function of the site is having the ability to create a Post with an image for other users to see and interact with. All features of the site have full CRUD functionality, meaning users have the ability to see, create, edit and delete this posts.
 
 ## Albums
 
  Albums also have Crud functionality, user's have the ability to see each other Albums, create their albums as a collection of posts that they have created, edit and delete their albums.
  
 ## Comments
 
  Users have the ability to leave comments on posts so that other users can see them, there's only logic that prevents users from being able to edit and delete comments that weren't originally made by them . 
 
 ## Search 
 
 to be updated...
 
 ## Follow users
 
 to be updated...
 
 ## like A post 
 
 to be updated...
 
 ## Chat built with Socket.io 
 
 to be updated...
 
 
 # What's next?
 
 I would like to add a search feature, a follow feature and like feature from every posts. Mainly after having done the follow feature I would really like to create a chat built with socket.io so that users can privately talk to users they have followed. 
