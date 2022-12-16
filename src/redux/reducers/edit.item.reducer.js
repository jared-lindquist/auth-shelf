const EditItemReducer = (state = [], action) => {
	switch (action.type) {
		case 'EDIT_ITEM_FIELD':
			return action.payload;
		default:
			return state;
	}
};

export default EditItemReducer;
