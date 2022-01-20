# Guide link:
https://www.valentinog.com/blog/redux/#react-redux-tutorial-a-minimal-react-development-environment

# Graphical explanation of redux:
https://miro.medium.com/max/1276/1*Nt814ZypzBevBk74lNr4SA.jpeg
https://medium.com/@findforhad/redux-mapstatetoprops-and-mapdispatchtoprops-explained-ea48d41708dc

# Setup:
- Install redux:
$ npm i redux --save-dev

- Create a directory for the store:
$ mkdir -p src/js/store
    - Next up create a new file, src/js/store/index.js and initialize the store
    - "State in Redux comes from reducers. Let’s repeat: reducers produce the state of your application."

- Create a directory for the root reducer:
$ mkdir -p src/js/reducers

- Create a directory for actions:
$ mkdir -p src/js/actions

- To connect redux to react, install react-redux:
$ npm i react-redux --save-dev

# Asynchronous Actions:
We cannot call Fetch from within an action creator in Redux.
That's because Redux is expecting objects as actions, but we're trying to return a Promise.
With redux-thunk (it's a middleware) we can overcome the problem and return functions from action creators. This way we can call APIs, delay the dispatch of an action, and more.
For making things work we need a custom middleware. Luckily there's something ready for us: redux-thunk.

- Install redux-thunk
$ npm i redux-thunk --save-dev
