import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
    yield takeEvery("DATA_REQUESTED", workerSaga);
}

// from actions/index.js -> take every action named DATA_REQUESTED and for each
//    action, spin a worker saga
function* workerSaga() {
    try {
        const payload = yield call(getData);
        // if function getData succeeds, then dispatch(put) a new action
        //   named DATA_LOADED alongside with a payload
        console.log("payload(try):", payload)
        yield put({ type: "DATA_LOADED", payload });
    } catch (e) {
        // if the function errors out, then dispatch (put) a new action 
        //   named API_ERRORED, alongside with a payload (the error)
        console.log("payload(catch):", e)
        yield put({ type: "API_ERRORED", payload: e });
    }
}


function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response.json()
    );
}