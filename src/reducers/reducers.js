import { FINISH_FEED } from '../actions/actions';

const initialState = {
  current: {
    date: null,
    leftBoob: {
      time: 0
    },
    rightBoob: {
      time: 0
    }
  },
  history: []
};

function rootReducer(state = initialState, action) {
  console.log("every action", action)

  switch (action.type) {
    // case 'finish': {
    //   return {
    //     ...state,
    //     history: [
    //       ...state.history,
    //       action.payload
    //     ]
    //   }
    // }
    case FINISH_FEED:
      return (
        {
          current: {
            date: action.date,
            leftBoob: {
              time: action.leftTime
            },
            rightBoob: {
              time: action.rightTime
            }
          },
          history: [
            ...state.history,
            action.payload
          ]
        });
    default:
      return state;
  };
}

export default rootReducer;