## Descriptions

I this repo you should create project witch will should demonstrate your a strong knowledge of vanilla JS, CSS, and HTML.

You should create a [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA), for display list of popular films and ability to click on each item from list and see detailed info about selected film. Pls use for this [themoviedb api](https://www.themoviedb.org/documentation/api). For UI you can be inspired by [this site](https://film-pwa.web.app/)


## Requirements
  1. readme.md file according to [best practice](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/)
  2. use [git flow](https://nvie.com/posts/a-successful-git-branching-model/)
  3. structure of this project should be like this 
    ```
      index.htm
      main.css
      src  
        - index.js
        - utils (if you need it)
        - services 
          - api.js
          ...
        - components
        - pages
        ...
    ```     
  4. for navigate between index page (page with list) and details info page use [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
  5. you should handle three state of your request - pending, resolve and reject, and display appropriate UI
  6. Should be deployed on some free hosting (Github -page for example)
  7. Don't use any thirds-libraries

## Plan
 1. create page Layout - 6h
    - create one function which will be render the layout (footer, header, main), and receive content that should be render inside `main`
 2. create logic for navigation between pages - 8h
    - create separate function which will be track the current URL and render appropriate page, 
      for example
      ```
       / - home 
       /film/1234 - film number 1234
      ```
    - create function for push `History API`
    
 3. Create a function for rendering film card - 8h 
    - function should be completely independent for any other parts of the code
    - recive parameters id, title, descriptiion (short), img
    - onClick on card should push to page with film details
    
    example: 
    
    ```js
    const mock = { id: 123, title: "Some Film", description: "Asome ...." , img: "http//..."  };

    renderFilmCard({ id, title, description, img });
    ```

 4. Add api call for list of movies - 
   - as it is a first api call you should create one reusable which will call to api, and automatically add your api key.
   - call to api for list of movies
   - display loading state
   - display error in case this happens
   - display appropriate UI with details about the film
  
 5. Add api call to get one movie by id - 
   - function should recive film id, and make api call for details info about tis film, and return this info
   
 6. Add UI for page with info about one movie - 
   - on this page should be called function from point 5
   - display loading state
   - display error in case this happens
   - display appropriate UI with details about the film
 
