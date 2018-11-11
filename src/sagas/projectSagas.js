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

function* deleteProjectSaga(action) {
    console.log('in deleteproject saga', action.payload);
    try{
        yield call(axios.delete, `/api/project/${action.payload}`);
        yield put ({type: 'FETCH_PROJECTS'});
    }
    catch(error) {
        console.log('error deleting projects', error);
    }
}

function* addProjectSaga(action) {
    console.log('in addproject saga', action.payload);
    try{
        yield call(axios.post, `/api/project/`, { data: action.payload} );
        yield put ({type: 'FETCH_PROJECTS'});
    }
    catch(error) {
        console.log('error adding project', error);
    }
}

function* rootSaga() {
    yield takeEvery( 'FETCH_PROJECTS', fetchProjectSaga );
    yield takeEvery( 'DELETE_PROJECT', deleteProjectSaga );
    yield takeEvery( 'ADD_PROJECT', addProjectSaga );
  }

export default rootSaga;