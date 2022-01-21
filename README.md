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

-- Redux does not understand other types of actions other than a plain object. 
redux-thunk is a middleware for Redux. With redux-thunk you can return functions from action creators, not only objects. You can do asynchronous work inside your actions and dispatch other actions in response to AJAX calls.


* Redux Saga
- redux-saga is a Redux middleware for managing side effects. With redux-saga you can have a separate thread in your application for dealing with impure actions: API calls, storage access, and more.
- With redux-thunk you can put an API call directly inside an action creator while in redux-saga you can have clear separation between synchronous and asynchronous logic.
- Worth noting, redux-saga does not use regular JavaScript function. You will see a lot of asterisks and "yield" in your sagas. Those asterisks mark generator functions!
- Generator functions in JavaScript are function which can be paused and resumed on demand. redux-saga relies heavily on generator functions but the good thing is that you won't need to call next() in your code. redux-saga handles that for you under the hood.

