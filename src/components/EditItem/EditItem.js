import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';

const EditItem = () => {

    const store = useReduxStore();
    const dispatch = useDispatch();


    const [itemName, setItemName] = useState(store.EditItemReducer.description);
    const [itemUrl, setItemUrl] = useState(store.EditItemReducer.image_url);

    const itemDetails = {
        itemName: itemName,
        itemUrl: itemUrl,
    }

    const handleClick = () => {
        dispatch({ type: 'EDIT_ITEM', payload: itemDetails })
        setItemName('');
        setItemUrl('');
        
    }

    return (
        <div className='addItemDiv'>
            <input value={itemName} onChange={(e) => setItemName(e.target.value)} type="text" placeholder="Item Name" />
            <input value={itemUrl} onChange={(e) => setItemUrl(e.target.value)} type="text" placeholder="URL" />
            <button onClick={handleClick}>Update</button>
        </div>
    )
}

export default EditItem;