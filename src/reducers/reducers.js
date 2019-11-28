import { FINISH_FEED } from '../actions/actions';

const initialState = {
  current: {
    date: null,
    leftBoob: {
      time: 0
    },
    rightBoob: {
      time: 0
    },
    lastFedOnLeftSide: ''
  },
  history: []
};

function rootReducer(state = initialState, action) {
  console.log("every action", action)

  switch (action.type) {

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
            },
            lastFedOnLeftSide: action.side
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