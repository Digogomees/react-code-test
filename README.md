# This is my Applications for Tymeshift

This project was made using React.js only. 

## Components

 I decided to separate all of the things I had to do into components, so it would ease my job and make it easier, in case I had to do the same thing twice, I could just render the component on both ends.
    

### `Nav.js`

 Starting with the nav. I was kind of undecided on what to do here, but I ended up doing a nav so I could isolate the component and styling it without the chance of it affecting/getting affected by other components css. 
  This one was quite simple, just two text tags and the styling provided to me in the github repo.


### `Main.js`

 So I chose Main.js to store all of the cards and for fetching the API data. I used a few functions from the utils folder, but I'll go there next. 
  It was on this file that I ended up using AXIOS for fetching the API data. Axios managed the HTTP Request, that retrieve an response, which was an array (JSON object).
 Last but not least I mapped through the array so I could match each card component with their unique data (used ID).

### `utils/date.helper.js`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Resources 

Eventough I'd love to say so, I don't know everything and am aware of how far from knowing it all is. Therefore I thought it would be nice to show the resources I used to make this project, as it shows my googling skills and ability to prepare what I am going to do in terms of logics and then research the execution needed for the process. For this I the obvious Stack Overflow, github pages and other articles that I found online. However, I am also part of several dev discord groups and I did go there too. I am not afraid to admit when I am stuck and I will ask for help rather than sitting there trying the same 4 solutions over and over. 

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
