const ItemState = (state = false, action) => {
    switch (action.type) {
      case 'SET_EDIT_STATE':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default ItemState;
  