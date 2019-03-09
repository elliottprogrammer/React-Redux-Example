const initialState = {
    age: 21,
    history: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AGE_UP':
            return {
                ...state,
                age: state.age + action.value,
                history: state.history.concat({ age: state.age + action.value })
            }
        case 'AGE_DOWN':
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({ age: state.age - action.value })
            }
        case 'DELETE_HIST_ITEM':
            return {
                ...state,
                history: state.history.filter((val, index) => index !== action.index)
            }
        default:
        return state;
    }
}

export default reducer;