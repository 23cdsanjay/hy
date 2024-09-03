import React from 'react';

const Student = ({ student, deleteStudent }) => {
  return (
    <li>
      {student.name} - Age: {student.age}
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
    </li>
  );
};

export default Student;
