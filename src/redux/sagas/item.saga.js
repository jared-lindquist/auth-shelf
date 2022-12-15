import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(action) {
	try {
		const item = yield axios.get('/api/shelf');
		console.log(' [itemSaga] Items is: ', item);
		yield put({ type: 'SET_ITEMS', payload: item.data });
	} catch {
		console.log('Error is getting all items from DB');
	}
}

function* itemSaga(action) {
	yield takeLatest('FETCH_ITEMS', fetchItems);
}

export default itemSaga;
