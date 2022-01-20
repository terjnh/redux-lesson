import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types"

export function addArticle(payload) {
  console.log("actions---payload:", payload)
  return { type: ADD_ARTICLE, payload }
};


export function getData() {
  return function (dispatch, getState) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json }); 
      })
      .then(console.log("getState:", getState))
  }
}