import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentData,
  studentCreate,
  studentDelete,
  studentUpdate,
} from "../redux/student/action";

const Student = () => {
  const dispatch = useDispatch();
  const { students, loading } = useSelector((state) => state.student);

  const [editMode, setEditMode] = useState(false);

  // form submit
  const [input, setInput] = useState({
    name: "",
    roll: "",
    email: "",
    photo: "",
  });

  // handle bar edit
  const handEdidMode = (item) => {
    setEditMode(true);
    setInput(item);
  };

  // handle input change
  const handelInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // handle student delete
  const handleStudentDelete = (id) => {
    dispatch(studentDelete(id));
  };

  // handle student create
  const handleStudentCreate = (e) => {
    e.preventDefault;

    if (editMode) {
      dispatch(studentUpdate({ id: input.id, data: input }));
      setEditMode(false);
    } else {
      dispatch(studentCreate(input));
    }
    setInput({
      name: "",
      roll: "",
      email: "",
      photo: "",
    });
  };

  //  use effect =>
  useEffect(() => {
    dispatch(getStudentData());
  }, []);

  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <div className="table-responsive">
                  <h1>{loading && "LOAGING........"}</h1>

                  <form onSubmit={handleStudentCreate}>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={input.name}
                      onChange={handelInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Roll"
                      name="roll"
                      value={input.roll}
                      onChange={handelInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={input.email}
                      onChange={handelInputChange}
                    />
                    <input
                      type="text"
                      placeholder="Photo"
                      name="photo"
                      value={input.photo}
                      onChange={handelInputChange}
                    />
                    <button type="submit" className="btn btn-sm btn-success">
                      {editMode ? "Update" : "Add Student"}
                    </button>
                  </form>

                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Photo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Roll</th>
                        <th scope="col">Eamil</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students && students.length > 0 ? (
                        students.map((item, index) => {
                          return (
                            <tr key={index} className="align-middle">
                              <td>{index + 1}</td>
                              <td>
                                <img
                                  style={{
                                    height: "50px",
                                    width: "50px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                  }}
                                  src={item.photo}
                                  alt=""
                                />
                              </td>
                              <td>{item.name}</td>
                              <td>{item.roll}</td>
                              <td> {item.email} </td>
                              <td>
                                <button className="btn btn-sm btn-info">
                                  view
                                </button>
                                <button
                                  className="btn btn-sm btn-success mx-2"
                                  onClick={() => handEdidMode(item)}
                                >
                                  Edit
                                </button>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleStudentDelete(item.id)}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <h1 style={{ color: "red", textAlign: "center" }}>
                          Data is not found
                        </h1>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
