import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import useReduxStore from '../../hooks/useReduxStore';

function ShelfPage() {
	const store = useReduxStore();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'FETCH_ITEMS' });
	}, []);
	//TODO Update the (store.map) to match the reducer that will be created later on.
	return (
		<div className='container'>
			{JSON.stringify({ store })}
			<h2>Shelf</h2>
			<p>All of the available items can be seen here.</p>
			<table>
				<tr>
					<th> Description</th>
					<th>Image</th>
				</tr>
				{/* {store.map((item, index) => {
					return (
						<tr key={index}>
							<td>{item.description}</td>
							<td>{item.image_url}</td>
						</tr>
					);
				})} */}
			</table>
		</div>
	);
}

export default ShelfPage;
