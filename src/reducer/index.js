const defaultState = {
    caps: [],
    loading: false,
    error: false,
}


const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case 'CAPS_REQUESTED':
            return {
                ...state,
                loading: true,
                error: false,
            };
        case 'CAPS_LOADED':
            return {
                ...state,
                caps: action.payload,
                error: false,
                loading: false,
            };
        case 'CAPS_ERROR':
            return {
                ...state,
                caps: [],
                error: true,
                loading: false,
            };
        default:
            return state;
    }
}

export default reducer