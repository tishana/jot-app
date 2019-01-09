# Jot

 Jot is a frontend application I created using React for use with a backend called Note App API.

--------------------------------------------
## User Stories

* I can create a note (Create Note).
* I can view a list of notes (Read Note).
* I can edit a note (Update Note).
* I can view a note (Read Note).
* I can delete a note (Delete Note).

--------------------------------------------

## Technologies Used for Jot:

* React.js
* Axios
* Surge

--------------------------------------------
## How to Install Jot locally:

* Fork and clone this repository to your machine
* Change into the new directory
* Run npm install:

```
$ npm i

```
* Open another terminal tab, and run npm run start

```
$ npm run start

```

* A browser window will open, and you're all set.

You will see notes on the main page. You can delete these, and create your own. You can even connect it to your own back end by changing the urls.

--------------------------------------------
## Challenges During this Project

My original goal for Jot was to make this a fullstack application with a front end portion in Backbone.js. I've never worked with Backbone.js and this proved to be a huge hurdle. 

In the end, all front end frameworks intend to do the same thing, display your data. However, learning THIS framework took some serious brain gymnastics, and I lost a lot of valuable time due to a trivial mistake: BACKBONE IS NOT ES6 COMPATIBLE!

After figuring this out, I had to start all over because I was constantly scrapping what I thought was bad code.

I decided to build a backend application with Node, Mongoose, and Express, which you can view [here](https://github.com/tishana/note-app).

This experience has taught me a lot about learning on my own. I wasn't able to get any instructor assistance due to the nature of this project, but I feel more  confident that I can teach myself anything.

--------------------------------------------
## Future Plans for Jot:

I also want to add user authentication so anyone can log in and see their own notes. On top of that I would like to build out a way for people to send notes via email or SMS.


