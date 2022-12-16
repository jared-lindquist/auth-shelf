import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import AddItem from '../AddItem/AddItem';
import { useState } from 'react';
import EditItem from '../EditItem/EditItem';

function ShelfPage() {

	// let editState = false;
	// const [editState, setEditState] = useState(false);
	const store = useReduxStore();
	const dispatch = useDispatch();

	useEffect(() => {
		
		dispatch({ type: 'FETCH_ITEMS' });
	}, []);


	const handleEdit =  (item) => {
		
		console.log('in handleEdit', item);
		dispatch({type: 'SET_EDIT_STATE', payload: true})
		dispatch({type: 'EDIT_ITEM_FIELD', payload: item})
		
	}

	
	//TODO Update the (store.map) to match the reducer that will be created later on.
	return (
		<div className='container'>
			{/*{JSON.stringify({ store })} */}
			{store.ItemState ? <EditItem /> : <AddItem />}
			<h2>Shelf</h2>
			<p>All of the available items can be seen here.</p>
			<table>
				<tr>
					<th> Description</th>
					<th>Image</th>
				</tr>
				{store.itemReducer.map((item, index) => {
					return (
						<tr key={index}>
							<td>{item.description}</td>
							<td><img src={item.image_url} /></td>
							<td><button onClick={() => dispatch({type: 'DELETE_ITEM', payload: item})}>Delete Me</button></td>
							<td><button onClick={() => handleEdit(item)}>Edit item</button></td>
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default ShelfPage;
