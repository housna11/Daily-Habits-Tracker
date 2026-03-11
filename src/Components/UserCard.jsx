import React from 'react'
import RoutineList from './RoutineList' 

function UserCard({ user, onDeleteRoutine, onToggleFait }) { 
  const progress =
   
     Math.round(
        (user.routines.filter(r => r.fait === true).length / user.routines.length) * 100
      )
      

  return (
    <div className='bg-white w-[310px] rounded-md flex flex-col items-center justify-start pt-5 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105'style={{ boxShadow: "0 4px 6px rgba(4, 31, 155, 0.5)" }}>
      <div className="mb-6 flex flex-col items-center">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover border-2 border-[#041F9B] mb-2"
        />
        <p className='text-center font-medium'>{user.name}</p>
        <div className="w-[250px] bg-gray-200 rounded-full h-2.5 mt-2">
          <div
            className= "bg-[#041F9B80] h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <RoutineList 
        routines={user.routines} 
        userId={user.id} 
        onDeleteRoutine={onDeleteRoutine} 
        onToggleFait={onToggleFait} 

      />
    </div>
  )
}


export default UserCard
