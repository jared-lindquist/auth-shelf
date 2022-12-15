import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddItem = () => {
    const dispatch = useDispatch();

    const [itemName, setItemName] = useState('');
    const [itemUrl, setItemUrl] = useState('');

    const itemDetails = {
        itemName: itemName,
        itemUrl: itemUrl,
    }

    const handleClick = () => {
        dispatch({ type: 'ADD_ITEM', payload: itemDetails })
        setItemName('');
        setItemUrl('');
        
    }

    return (
        <div className='addItemDiv'>
            <input value={itemName} onChange={(e) => setItemName(e.target.value)} type="text" placeholder="Item Name" />
            <input value={itemUrl} onChange={(e) => setItemUrl(e.target.value)} type="text" placeholder="URL" />
            <button onClick={handleClick}>SUBMIT</button>
        </div>
    )
}

export default AddItem;