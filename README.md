# SPA (list of movies) of Vanilla JavaScript

## This is my practical task to consolidate JS knowledge 

### Project Description

Hello everybody. I learn Front-End development. I learned foundations of HTML, CSS and JS.
This project is a practical task to consolidate my knowledge on the studied material.
This task was designed by my friend and Front-End developer [Taras Protsyshyn](https://github.com/TarasProtsyshyn) thx him.
Application has no `HTML` only `JavaScript` and `CSS` for stylization. 

---

### How to use ?

1. This application makes a request to the [server](https://www.themoviedb.org/documentation/api) with movies 
and in response receives data about the first 20 movies.

2. The main page of the application displays of the list of movies in the form of cards like this:

![alt text](https://github.com/Mmarvinn/JavaScriptPractice/blob/main/images/main-page.jpg "main page application")

3. We can hover over any movie in the list and click on it. After clicking, a page with a description and 
characteristics of the movie opens before us, like this:

![alt text](https://github.com/Mmarvinn/JavaScriptPractice/blob/main/images/details-page.jpg "movie details application")

4. In the URL we can see a hash like this `#film/361743`. If we change last 6 numbers (its an ID of movie) we will get 
info about movie of this ID. ID's must have 6 numbers like this `#film/000002`. The server has about 1 million ID's of movies.

5. Button `HOME` returns us to the main page.
