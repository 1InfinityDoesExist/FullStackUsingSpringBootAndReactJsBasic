import {
  GET_BUILDING_TASK,
  GET_BUILDING_TASKS,
  DELETE_BUILDING_TASK
} from "../Actions/Types";

const initialState = {
  building_task: {},
  building_tasks: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_BUILDING_TASK:
      return {
        ...state,
        building_task: action.payload
      };
    case GET_BUILDING_TASKS:
      return {
        ...state,
        building_tasks: action.payload
      };

    case DELETE_BUILDING_TASK:
      return {
        ...state,
        building_tasks: state.building_tasks.filter(
          building_task => building_task.id !== action.payload
        )
      };
    default:
      return state;
  }
}
