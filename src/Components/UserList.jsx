import React from "react";
import UserCard from "./UserCard";

function UserList({ users, onDeleteRoutine, onToggleFait }) { 
  return (
    <div className="w-full h-[450px] p-8 flex justify-between items-start gap-4">
      {users.map((user) => (
        <UserCard 
          key={user.id} 
          user={user} 
          onDeleteRoutine={onDeleteRoutine} 
          onToggleFait={onToggleFait}
        />
      ))}
    </div>
  );
}

export default UserList;
