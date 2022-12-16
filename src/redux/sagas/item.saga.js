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

function* deleteItem(action) {
	console.log(action.payload);
	try {
		console.log('in deleteItem');
		yield axios.delete('/api/shelf/' + action.payload.id);
		
		/*
		yield axios({
			type: 'DELETE',
			url: '/api/shelf/' + action.payload.id,
		});
		*/
		yield put({type: 'FETCH_ITEMS'});
	} catch(err){
		console.log('error deleting', err);
	}
}

function* editItem(action) {
console.log('in item.saga editItem', action.payload);
try {
	yield axios.put('/api/shelf/' + action.payload.id, action.payload);
	yield put({type: 'FETCH_ITEMS'});
}
catch (error) {
	console.log('error in item.saga editItem', error);
}
}

function* itemSaga(action) {
	yield takeLatest('FETCH_ITEMS', fetchItems);
	yield takeLatest('ADD_ITEM', addItem);
	yield takeLatest('DELETE_ITEM', deleteItem);
	yield takeLatest('EDIT_ITEM', editItem);
}

export default itemSaga;
