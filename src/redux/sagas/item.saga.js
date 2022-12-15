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

function* addItem(action) {
	// console.log('in addItem, action.payload:', action.payload);
	try {
		yield axios.post('/api/shelf', action.payload);
		yield put({type:'FETCH_ITEMS'});
	}catch(err) {
		console.log('error adding item, ', err)
	}
}

function* itemSaga(action) {
	yield takeLatest('FETCH_ITEMS', fetchItems);
	yield takeLatest('ADD_ITEM', addItem);
}

export default itemSaga;
