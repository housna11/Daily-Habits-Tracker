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
      <h1 className='text-center pt-10 text-3xl font-bold text-[#041F9B] animate-pulse drop-shadow-[0_0_10px_rgba(4,31,155,0.8)]'>Daily Habits Tracker</h1>
      <div className='flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between mt-8 px-2 items-center bg-white mx-auto w-full h-auto sm:h-[90px] rounded-md shadow-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-2xl active:translate-y-0 active:scale-[0.99]'style={{ boxShadow: "0 4px 6px rgba(4, 31, 155, 0.5)" }}>

        <input 
          type="text" 
          placeholder='Nouvelle Routine' 
          className="w-full sm:w-[750px] h-[38px] rounded-lg border border-[#041F9B80] p-4 hover:border-[#041F9B] focus:border-[#041F9B] focus:outline-none transition-colors duration-200" 
          value={routineTitle}
          onChange={(e) => setRoutineTitle(e.target.value)}
        />
        <select 
          className='w-full sm:w-32 h-[38px] border border-[#041F9B80] rounded-lg p-2 hover:border-[#041F9B] focus:border-[#041F9B] focus:outline-none transition-colors duration-200'
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {users.map((user) => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </select>
        <button 
          type="button" 
          className='w-full sm:w-28 h-[38px] border text-white bg-[#041F9B] rounded-lg cursor-pointer'
          onClick={handleAddRoutine}>
          Ajouter
        </button>
      </div>
    </div>
  );

  
}

export default AddRoutineForm;
