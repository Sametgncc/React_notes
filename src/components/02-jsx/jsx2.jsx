import React from 'react';
// KURAL 4 : JSX içine JavaScript yerleştirmek için {} ifadesi kullanılmalıdır 


export const Jsx2 = () => {
  const student = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    skills: ["English", "Html", "Math"],
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  };

  return (
    <ul>
      <li>
        <b>First Name: </b> <span>{student.firstName}</span>
      </li>
      <li>
        <b>Last Name : </b> <span>{student.lastName}</span>
      </li>
      <li>
        <b>Adress: </b> <span>{student.address.street}</span>
      </li>
      <li>
        <b>Skills : </b> <span>{student.skills.toString()}</span>
      </li>
    </ul>
  );
};
