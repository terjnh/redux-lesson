import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            console.log("middleware to handle filtering...")

            if (action.type === ADD_ARTICLE) {
                console.log("middleware---action", action)
                const foundWord = forbiddenWords.filter(word => {
                    console.log("middleware---word:", word)
                    action.payload.title.includes(word)
                }
                );
                console.log("middleware---foundWord:", foundWord)
                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" });
                }
            }
            console.log("move to reducer... to update copy of state...")
            return next(action);
        };
    };
}   