import { initState } from './initState';

const reducer = (state = initState, action) => {
  switch(action.type) {
    case "SET_CURRENT_MEMORIAL":
      return {
        ...state,
        currentMemorial: action.payload,
      }
    case "TOGGLE_MODAL":
      return {
        ...state,
        showModal: !state.showModal,
      }
    default: 
      return state;
  }
}

export default reducer;