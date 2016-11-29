# ReactJS Tutorial Application for ESME

## Overview

This application takes the developer through the process of building a web-application using
ReactJS.

Each tagged commit is a separate lesson teaching a single aspect of the framework.


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


## Workings of the Application

- There is no dynamic backend (no application server) for this application. Instead we fake the
application server by fetching static JSON files.


## Commits / Tutorial Outline

You can check out any point of the tutorial using:

```
git checkout step-?
```

To see the changes made between any two lessons use the `git diff` command:

```
git diff step-?..step-?
```

### step-0_X _Back To Basics_
### step-1_X _Immutability_
### step-2_X _Login example_
### step-3_X _CSS with Semantic UI_
### step-4_X _Route & Router_
### step-5_X _Basics of storing_
### step-6_X _Redux_



### Installing Dependencies

The application relies upon various Node.js tools. You can install these by running:

```
npm install
```

This will also run Bower, which will download the Angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application
running.


## Application Directory Layout

```
src/                     --> all the source code of the app
index.html             --> app layout file (the main HTML file of the app)

node_modules/...         --> development tools (fetched using `npm`)

bower.json               --> Webpack configuration
package.json             --> Node.js specific metadata, including development tools dependencies
```


# td2iwa
# td2iwa
