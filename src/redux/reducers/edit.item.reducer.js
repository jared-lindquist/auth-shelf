const EditItemReducer = (state = [], action) => {
	switch (action.type) {
		case 'EDIT_ITEM':
			return action.payload;
		default:
			return state;
	}
};

export default EditItemReducer;
