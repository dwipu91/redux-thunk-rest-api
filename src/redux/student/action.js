import axios from "axios";
import {
  ADD_STUDENT_FULFILLED,
  ADD_STUDENT_PENDING,
  ADD_STUDENT_REJECTED,
  DELETE_STUDENT_FULFILLED,
  DELETE_STUDENT_PENDING,
  DELETE_STUDENT_REJECTED,
  GET_STUDENT_FULFILLED,
  GET_STUDENT_PENDING,
  GET_STUDENT_REJECTED,
  UPDATE_STUDENT_FULFILLED,
  UPDATE_STUDENT_PENDING,
  UPDATE_STUDENT_REJECTED,
} from "./actionType";

// get student data
export const getStudentData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_STUDENT_PENDING });

    const respons = await axios.get("http://localhost:7000/studnets");

    dispatch({ type: GET_STUDENT_FULFILLED, payload: respons.data });
  } catch (error) {
    dispatch({ type: GET_STUDENT_REJECTED });
  }
};

//  delete student data
export const studentDelete = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_STUDENT_PENDING });
    await axios.delete(`http://localhost:7000/studnets/${id}`);
    dispatch({ type: DELETE_STUDENT_FULFILLED, payload: id });
  } catch (error) {
    dispatch({ type: DELETE_STUDENT_REJECTED });
  }
};

// studet create
export const studentCreate = (data) => async (dispatch) => {
  try {
    dispatch({ type: ADD_STUDENT_PENDING });
    await axios.post(`http://localhost:7000/studnets`, data);
    dispatch({ type: ADD_STUDENT_FULFILLED, payload: data });
  } catch (error) {
    dispatch({ type: ADD_STUDENT_REJECTED });
  }
};

//    STUDENT UPDATE
export const studentUpdate =
  ({ id, data }) =>
  async (dispatch) => {
    try {
      dispatch({ type: UPDATE_STUDENT_PENDING });
      await axios.patch(`http://localhost:7000/studnets/${id}`, data);
      dispatch({
        type: UPDATE_STUDENT_FULFILLED,
        payload: { id: id, ...data },
      });
    } catch (error) {
      dispatch({ type: UPDATE_STUDENT_REJECTED });
    }
  };
