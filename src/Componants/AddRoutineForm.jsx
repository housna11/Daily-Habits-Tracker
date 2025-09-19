import React, { useState } from 'react';

function AddRoutineForm({ users, setUsers }) {
  const [routineTitle, setRoutineTitle] = useState('');
  const [selectedUser, setSelectedUser] = useState(users[0].name);

  const handleAddRoutine = () => {
    if (!routineTitle) return;

    // Ajouter la nouvelle routine dans le state users
    const updatedUsers = users.map(user => {
      if (user.name === selectedUser) {
        const newRoutine = {
          id: Date.now(), // id unique
          title: routineTitle,
          fait: false
        };
        return { ...user, routines: [...user.routines, newRoutine] };
      }
      return user;
    });

    setUsers(updatedUsers); // met à jour le state et localStorage via useEffect
    setRoutineTitle(''); // réinitialiser le champ input
  };

  return (
    <div className=''>
      <h1 className='text-center pt-10 text-3xl text-[#157A86]'>Daily Habits Tracker</h1>
      <div className='flex justify-between mt-8 px-2 items-center bg-white mx-auto w-full h-[90px] rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1' style={{ boxShadow: "0 4px 6px rgba(21, 122, 134, 0.5)" }}>

        <input 
          type="text" 
          placeholder='Nouvelle Routine' 
          className="w-[750px] h-[38px] rounded-lg border border-gray-400 p-4" 
          value={routineTitle}
          onChange={(e) => setRoutineTitle(e.target.value)}
        />
        <select 
          className='border border-gray-400 w-32 h-[38px] rounded-lg p-2'
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          {users.map((user) => (
            <option key={user.id} value={user.name}>{user.name}</option>
          ))}
        </select>
        <button 
          type="button" 
          className='border text-white bg-[#157A86] w-28 h-[38px] rounded-lg'
          onClick={handleAddRoutine}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default AddRoutineForm;
