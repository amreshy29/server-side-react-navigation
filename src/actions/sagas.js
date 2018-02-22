import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function getData (url){
    return fetch(url).then((res)=> {return res.json()});
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchProducts(action) {
    try {
        const products = yield call(getData, "products.json");
        console.log(products);
        yield put({type: "SEARCH", data: products});
    } catch (e) {
        console.log(e);
        yield put({type: "GET_DATA_FAILURE", message: e.message});
    }
}

/*
always
 */
/*function* PLPSaga() {
    yield takeEvery("GET_PRODUCTS", fetchProducts);
}*/


/*
 for latest
 */
function* PLPSaga() {
    yield takeLatest("GET_DATA", fetchProducts);
}


export default PLPSaga;
