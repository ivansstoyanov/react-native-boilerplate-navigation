/**
 *  Redux saga class init
 * Import every feature saga here
 *
 */
import { all } from 'redux-saga/effects';
import { loginSagas } from '../pages/login/sagas';

// export default [loginSaga];

export default function* rootSaga() {
    yield all([...loginSagas]);
}
