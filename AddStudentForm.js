import React, { useState } from 'react';

const AddStudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age) {
      addStudent({ id: Date.now(), name, age });
      setName('');
      setAge('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Student Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter student name"
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter student age"
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;
