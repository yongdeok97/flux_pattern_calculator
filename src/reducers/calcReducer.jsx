import { PLUS, MINUS, MUTIPLY, DIVIDE, RESULT } from '../actions/actionTypes';

const initialState = {
  count: 0,
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { count: state.count + 1 };
    case MINUS:
      return { count: state.count - 1 };
    case MUTIPLY:
      return { count: state.count - 1 };
    case DIVIDE:
      return { count: state.count - 1 };
    case RESULT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default calcReducer;
