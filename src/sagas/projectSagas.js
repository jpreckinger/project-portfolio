import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

//send call to server to get projects from database, sends result to reducer
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

//sends call to server to delete a projecet, then calls the fetchProjectSaga
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

//sends post call to server to add project to database, then GETS projects
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

// sends get call to server to get tags from database, then send them to reducer
function* fetchTagsSaga() {
    console.log('in fetchtags saga');
    try{
        const response = yield call(axios.get, '/api/tag');
        console.log('fetch response is', response.data);
        yield put ({type: 'SET_TAGS', payload: response.data});
    }
    catch(error) {
        console.log('error getting projects', error);
    }
}

//watches for actions, directs traffic
function* rootSaga() {
    yield takeEvery( 'FETCH_PROJECTS', fetchProjectSaga );
    yield takeEvery( 'DELETE_PROJECT', deleteProjectSaga );
    yield takeEvery( 'ADD_PROJECT', addProjectSaga );
    yield takeEvery( 'FETCH_TAGS', fetchTagsSaga );
  }

export default rootSaga;