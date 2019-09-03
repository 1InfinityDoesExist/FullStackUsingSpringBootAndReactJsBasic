import axios from "axios";
import {
  GET_ERRORS,
  GET_BUILDING_TASK,
  GET_BUILDING_TASKS,
  DELETE_BUILDING_TASK
} from "./Types";

export const createBuildingInstance = (
  building_task,
  history
) => async dispatch => {
  try {
    await axios.post(
      "http://localhost:8313/object/building/create",
      building_task
    );
    history.push("/");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getAllBuildingProject = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8313/object/building/get");
    dispatch({
      type: GET_BUILDING_TASKS,
      payload: res.data
    });
  } catch (error) {}
};

export const getBuildingById = pt_id => async dispatch => {
  try {
    const res = await axios.get(
      "http://localhost:8313/object/building/get/" + pt_id
    );

    dispatch({
      type: GET_BUILDING_TASK,
      payload: res.data
    });
  } catch (error) {}
};

export const deleteBuildingProjectById = building_id => async dispatch => {
  try {
    if (
      window.confirm("Do You Really Want To Remove This Instance From Database")
    ) {
      await axios.delete(
        "http://localhost:8313/object/building/delete/" + building_id
      );
      dispatch({
        type: DELETE_BUILDING_TASK,
        payload: building_id
      });
    }
  } catch (error) {}
};
