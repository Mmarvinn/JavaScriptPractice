## descriptions

I this repo you should create project witch will should demonstrate your a strong knowledge of vanilla JS, CSS, and HTML.

You should create a [SPA](https://developer.mozilla.org/en-US/docs/Glossary/SPA), for display list of popular films and ability to click on each item from list and see detailed info about selected film. Pls use for this [themoviedb api](https://www.themoviedb.org/documentation/api). For UI you can be inspired by [this site](https://film-pwa.web.app/)


## requirements
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