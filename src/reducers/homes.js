
export const homesReducer = (initialState = { homes: []}, action) => {
    const state = Object.assign({}, initialState);
    const { type, payload } = action;

    switch (type) {
        case 'SETHOMES':
            state.homes = payload;
            break;

        default:
            break;
    }

    return state;

};
