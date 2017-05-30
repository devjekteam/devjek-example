# devjek example

Hello we are devjek! This is a repo to give you an example of what we can do for you. We chose to recreate a [web design](https://dribbble.com/shots/2144293-Redesign-Dropbox-Dashboard/attachments/392373) we found on Dribbble by [Muhammad Asad](https://dribbble.com/mrasad40). We took the .PSD file and created the webpage built with React components. We have it hosted as a [Storybook](https://devjekteam.github.io/devjek-example/) so you can check it out the components individually as well as play around with the full page.

The purpose of this repo is to allow you to audit the code and see what you can expect to receive in return when you deliver design assets to us.

### How devjek works

- Visit our [homepage](http://devjek.com) to upload your assets and select your timeframe.

- We work asynchronously to convert your code or design assets to React components.

- Once we are done we will share with you the Storybook showing our work in action.

- If you are satisfied with the work we will transfer the ownership of a repo just like this one to you with all the React components and storybook assets.

### See it all put together

[Click Here](https://devjekteam.github.io/devjek-example/) to check out all the components in action.

Alternatively to host the storybook on your machine:

- Install [yarn](https://yarnpkg.com/lang/en/docs/install/) or [npm](https://www.npmjs.com/get-npm). We use yarn as our package manager but npm v3.0.0 + should work as well. If you use npm simply substitute `npm` for all the `yarn` commands.

- Install dependencies
```
yarn install
```

- Run storybook
```
yarn run storybook
```

The storybook should be hosted at http://localhost:6006/

### Code layout

 - In the root directory you will find **design.psd**. This is what we based our work off of and is an example of something that you can send to us to receive React components. A good .psd will include all of the assets we need to create an exact replica in code, such as images and fonts.

- **/stories** contains the default props and storybook examples that you see on our hosted page. This is a good place to look to see a working example of how you would integrate the components with your codebase.

- **/src** contains all of the source code and is what you will integrate into your own codebase.

- **/src/components** contains all of the barebones components that are the building blocks for the webpage.

- **/src/containers** contains groups of components put together to create a larger piece of the webpage. Examples include the Top Navigation bar and the File Grid.

 - **/src/public** contains the assets needed to render the webpage. These include the "Files", images and icons that we took from the design.psd.

### Tech Stack

We create our React components using [ES6](https://github.com/lukehoban/es6features) syntax. In this example we did the styling with regular old CSS but on request can do styling with SASS, LESS or some other CSS extension language. We write tests for every component using Jest + Enzyme.

To run tests:

```
yarn run test
```

Every component has it's own styling and test located in the same directory as the source file.

We create our components to be as extensible as possible. We don't want to assume functionality and allow you to pass whatever javascript handlers you will need to the components.
