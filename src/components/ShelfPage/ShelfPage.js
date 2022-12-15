import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useReduxStore from '../../hooks/useReduxStore';
import AddItem from '../AddItem/AddItem';

function ShelfPage() {
	const store = useReduxStore();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'FETCH_ITEMS' });
	}, []);
	
	//TODO Update the (store.map) to match the reducer that will be created later on.
	return (
		<div className='container'>
			{/*{JSON.stringify({ store })} */}
			<AddItem />
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
						</tr>
					);
				})}
			</table>
		</div>
	);
}

export default ShelfPage;
