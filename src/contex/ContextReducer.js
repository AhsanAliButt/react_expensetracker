// Reducer takes 2 things A old state and A action and return a newState;


export const contextReducer = (state, action) => {
    let transactions;
    switch (action.type) {
        case "Delete_Transaction":
            transactions = state.filter((item) => item.id !== action.payload);
            return transactions;

        case "Add_Transaction":
            transactions = [action.payload, ...state];

            return transactions;


        default:
            return state;
    }
}