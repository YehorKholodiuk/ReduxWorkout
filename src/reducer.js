const initialState = {
    count: 4
}

function reducer(state = initialState, action) {
    console.log(action)
    if (action.type === 'PLUS') {
        return {
            ...state,
            count: state.count + 1
        }
    }
    if (action.type === 'MINUS') {
        return {
            ...state,
            count: state.count - 1
        }
    }


    return state;
}

export default reducer;
