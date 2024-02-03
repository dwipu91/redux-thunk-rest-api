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

import { initialState } from "./initialState";

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENT_PENDING:
      return {
        ...state,
        loading: true,
      };

    case GET_STUDENT_FULFILLED:
      return {
        ...state,
        loading: false,
        students: action.payload,
        message: "Student data get success full",
      };

    case GET_STUDENT_REJECTED:
      return {
        ...state,
        loading: false,
        error: "there is no data found",
      };

    case DELETE_STUDENT_PENDING:
      return {
        ...state,
        loading: true,
      };

    case DELETE_STUDENT_FULFILLED:
      return {
        ...state,
        loading: false,
        students: state.students.filter((data) => data.id !== action.payload),
        message: "student data delete fullfilled",
      };

    case DELETE_STUDENT_REJECTED:
      return {
        ...state,
        loaging: false,
        error: "DELETE failded",
      };

    //  ADD STUDENT REDUCER
    case ADD_STUDENT_PENDING:
      return { ...state, loading: true };

    case ADD_STUDENT_FULFILLED:
      return {
        ...state,
        loading: false,
        message: "student created successfull",
        students: [...state.students, action.payload],
      };

    case ADD_STUDENT_REJECTED:
      return {
        ...state,
        loading: false,
        error: "Student create failed",
      };

    // STUDENT DATA UPDATE =>
    case UPDATE_STUDENT_REJECTED:
      return {
        ...state,
      };
    case UPDATE_STUDENT_PENDING:
      return {
        ...state,
        loading: false,
        message: "Update student data PENDING",
      };
    case UPDATE_STUDENT_FULFILLED:
      // state.students[state.students.findInde(action.payload.id)]= action.payload
      return {
        ...state,
        loading: false,
        message: "Student update successful",
        students: state.students.map((item) => {
          if (item.id == action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        }),
      };

    default:
      return state;
  }
};

// export defoult
export default studentReducer;
