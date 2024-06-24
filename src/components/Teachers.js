import React, { useState } from 'react';

const Teachers = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [initials, setInitials] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Teacher Added:', { name, phone, initials });
    setName('');
    setPhone('');
    setInitials('');
  };

  return (
    <div>
      <h2>Add Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              required 
            />
          </label>
        </div>
        <div>
          <label>
            Initials:
            <input 
              type="text" 
              value={initials} 
              onChange={(e) => setInitials(e.target.value)} 
              required 
            />
          </label>
        </div>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default Teachers;
