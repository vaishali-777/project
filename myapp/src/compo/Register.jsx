import React from 'react';

export default function Register() {
  return (
    <div>
      <h2>Register</h2>

      <input 
        type="text" 
        name="username" 
        id="username" 
        placeholder="Enter name"
      />

      <button type="submit">Submit</button>
    </div>
  );
}
