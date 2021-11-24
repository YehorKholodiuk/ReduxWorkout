const initialState = {
    count: 4
}

function reducer(state = initialState, action) {
    console.log(action)
    if (action.type === 'PLUS') {
        return {
            ...state,
            count: state.count + action.payload
        }
    }
    if (action.type === 'MINUS') {
        return {
            ...state,
            count: state.count - action.payload
        }
    }



    return state;
}

export default reducer;
