

#  Web Animations- File Directory 

## Root Markup, Styling, and Interactivity
### [index.html](./src/index.html)
The home page and entry point of the single page web application.
<br>

### [styles.css](./src/styles.css)
Contains the styling for the application.
<br>

### [maestro.js](./src/maestro.js)
Handles interactivity, etc for the application, including imported animations injection and loading of dynamic content.
<br><br>

## Application Animations
<sup><i>(injected/imported animations not included)</i></sup>

### [animations.css](./src/animations.css)
Animation keyframes and transitions for the application
<br>

### [maestro.js](./src/maestro.js)
Contains the animation logic and implementation for the web app's native animations.
<br><br>

## Imported Animations/ Dynamic Content

### anime-puppeteer.js (future)
Responsible for implementing the controls for the imported animations.

### [animations.json](./src/animations.json)
Contains animation data used for importing animation source code from GitHub Gists, CodePen, and for applying dynamic and animation specific content and styling.

### [session.json](./src/session.json)
Used to store animations that have already been fetched from GitHub Gists during a user session. This should improve performance by reducing latency on subsequent selections.

### [documentation.html](./src/documentation.html)
Web app documentation markup containing a breakdown of animation categories, controls, and other useful information for using the application. Will eventually be stored in a different format for injection into the web app. 

### home.html (future)
The landing page for the app, which will eventually be stored in a different format for inection into the app. 








