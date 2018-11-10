import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchProjectSaga() {
    console.log('in fetchproject saga');
    try{
        const response = yield call(axios.get, '/api/project');
        console.log('fetch response is', response.data);
        yield put ({type: 'SET_PROJECTS', payload: response.data});
    }
    catch(error) {
        console.log('error getting projects', error);
    }
}



function* rootSaga() {
    yield takeEvery( 'FETCH_PROJECTS', fetchProjectSaga );
  }

export default rootSaga;