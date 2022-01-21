import { ADD_ARTICLE, DATA_LOADED } from "../constants/action-types"

export function addArticle(payload) {
  console.log("Form.js->mapDispatchToProps->")
  console.log("actions---payload:", payload)
  return { type: ADD_ARTICLE, payload }
};


export function getData() {
  return { type: "DATA_REQUESTED" };
}