import React from "react";
import RoutineCard from "./RoutineCard";

function RoutineList({ routines, userId, onDeleteRoutine, onToggleFait }) {
  return (
    <div className="flex flex-col w-full items-center">
      {routines.map(routine => (
        <RoutineCard
          key={routine.id}
          routine={routine}
          userId={userId}
          onDeleteRoutine={onDeleteRoutine}
          onToggleFait={onToggleFait} 
        />
      ))}
    </div>
  );
}

export default RoutineList;
