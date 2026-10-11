import { useReducer, useState } from "react";

export const initialStudents = [
  { id: 1, name: "Yuvaraj", score: 95, status: "Present" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "SCORE_UPDATED":
      return state.map((student) =>
        student.id === action.payload.id
          ? { ...student, score: student.score + 1}
          : student,
      );

    case "STATUS_TOGGLED":
      return state.map((student) =>
        student.id === action.payload.id
          ? {
              ...student,
              status: student.status === "Present" ? "Absent" : "Present",
            }
          : student,
      );

    case "STUDENT_ADDED":
      return [...state, action.payload];
  }
};

const StudentProgram = () => {
  const [state, dispatch] = useReducer(reducer, initialStudents);
  const [name, setName] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();
    dispatch({
      type: "STUDENT_ADDED",
      payload: {
        id: Date.now(),
        name: name,
        score: 0,
        status: "Present",
      },
    });

    setName("");
  };

  return (
    <div>
      <h2>Student Progress Tracker</h2>

      <form onSubmit={handleAddStudent} >
        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">
          Add Student
        </button>
      </form>

      <ul>
        {state.map((student) => (
          <li key={student.id} >
            Name : {student.name} — Score: {student.score} — Status: {student.status}
            <button
              onClick={() =>
                dispatch({
                  type: "SCORE_UPDATED",
                  payload: { id: student.id },
                })
              }
              >
              +1 Score
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "STATUS_TOGGLED",
                  payload: { id: student.id },
                })
              }
              style={{ marginLeft: "6px" }}>
              Toggle Status
            </button>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default StudentProgram;