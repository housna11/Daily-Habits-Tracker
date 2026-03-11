import React, { useState } from 'react';

function AddRoutineForm({ users, setUsers }) {
  const [routineTitle, setRoutineTitle] = useState('');
  const [selectedUser, setSelectedUser] = useState(users[0].name);

  const handleAddRoutine = () => {
    if (!routineTitle) return;

    const updatedUsers = users.map(user => {
      if (user.name === selectedUser) {
        const newRoutine = {
          id: Date.now(), 
          title: routineTitle,
          fait: false
        };
        return { ...user, routines: [...user.routines, newRoutine] };
      }
      return user;
    });

    setUsers(updatedUsers); 
    setRoutineTitle(''); 
  };

  return (
    <div>
      <h1 className='text-center pt-10 text-3xl font-bold text-[#041F9B]'>Daily Habits Tracker</h1>
      <div className='flex justify-between mt-8 px-2 items-center bg-white mx-auto w-full h-[90px] rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1'style={{ boxShadow: "0 4px 6px rgba(4, 31, 155, 0.5)" }}>

        <input 
          type="text" 
          placeholder='Nouvelle Routine' 
          className="w-[750px] h-[38px] rounded-lg border border-[#041F9B80] p-4 hover:border-[#041F9B] focus:border-[#041F9B] focus:outline-none transition-colors duration-200" 
          value={routineTitle}
          onChange={(e) => setRoutineTitle(e.target.value)}
        />
        <select 
          className='border border-[#041F9B80] w-32 h-[38px] rounded-lg p-2 hover:border-[#041F9B] focus:border-[#041F9B] focus:outline-none transition-colors duration-200'
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {users.map((user) => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </select>
        <button 
          type="button" 
          className='border text-white bg-[#041F9B] w-28 h-[38px] rounded-lg cursor-pointer'
          onClick={handleAddRoutine}>
          Ajouter
        </button>
      </div>
    </div>
  );

  
}

export default AddRoutineForm;
