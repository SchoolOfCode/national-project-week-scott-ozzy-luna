

# Project week

## Links

- trello board: https://trello.com/invite/b/O9TY5jN7/df38cfc3a0105ff4009013ee78fd715f/main-project-planning

### The task

Our task was to create a full stack application that will improve the life of the School Of Code's bootcampers. During our initial team brainstorming session we all agreed that the current tools and processes were generally very efficient, easy to use, and effective. Our only nitpick was that the feedback forms are sometimes unnecessarily fiddly to fill out - largely because the bootcamper ID isn't remembered, but also the general UI of the google forms isn't particularly pleasant. We decided we would try to improve this aspect of bootcamper life, with the added benefit of (hopefully) increasing feedback form completion and submission.

#### The process

After settling on our aim, we proceeded to design our app - sketching out the various screens with Figma, designing from a mobile first perspective.


#### Tech stack
Next.js - server side rendering, will help secure data, easier routing options.
Authentication - firebase - ease of use, encryption, a good standard and popular solution for authentication.
OAuth - handled by firebase.
Hosting on Vercil - tight integration with next.js, and handles ssr well.
Postgres DB on Heroku - as previously covered on course.
React for front end.

# Components

-Homepage - signup
    -Logo
    -Text
    -Input
    -Button

-Login page
    -Logo
    -Text
    -Input
    -Button

-Dashboard
    -Icon/counter notification
    -List of forms
        -Completed
        -Not completed
        
        -List Item
            -Text 
                -Form name
                -Date
            -isCompleted icon/style

-Form page
    -Inputs
    -Button
    
