
export const mapStateToProps = (state) => {
    return {
        Homes: state.homes
    }
};

export const mapDispatchToProps = (dispatch) => {
    return {
        setHomesData: (payload) => { dispatch({type: 'SETHOMES', payload}); }
    };
};
