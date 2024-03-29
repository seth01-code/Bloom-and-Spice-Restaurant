export const initialState = {
    basket: [],

};

const reducer = (state, action) =>{

    switch(action.type) {
        case 'ADD_To_Basket':
            return {
                ...state,
                basket:[...state.basket, action.item]
            };

            default:
                return state;
    }

};

export default reducer