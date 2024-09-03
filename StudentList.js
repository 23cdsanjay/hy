import React from 'react';
import Student from './Student';

const StudentList = ({ students, deleteStudent }) => {
  return (
    <div>
      <h2>List of Students</h2>
      {students.length > 0 ? (
        <ul>
          {students.map(student => (
            <Student key={student.id} student={student} deleteStudent={deleteStudent} />
          ))}
        </ul>
      ) : (
        <p>No students available</p>
      )}
    </div>
  );
};

export default StudentList;
