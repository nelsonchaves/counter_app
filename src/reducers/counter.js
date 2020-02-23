const initialState = {
  count: 0,
  clickCount: 0,
  addNumber: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clickCount : state.clickCount + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clickCount : state.clickCount + 1
      };
      case 'REPLACE':
        return {
          ...state,
          addNumber: action.count
        };
        case 'CHANGE_COUNT':
          return{
            ...state,
            count: state.count = parseInt(state.addNumber),
            clickCount: 0,
          };
    default:
      return state;
  }
}

export default counterReducer;