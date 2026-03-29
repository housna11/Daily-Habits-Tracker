function RoutineCard({ routine, userId, onToggleFait, onDeleteRoutine }) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between bg-black/4 w-full sm:w-72 min-h-12 rounded-lg p-2 mx-2.5 mb-3 gap-2">
      
      <p className={`flex-1 min-w-0 text-sm break-words text-center sm:text-left ${routine.fait ? "line-through" : ""}`}>
        {routine.title}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto justify-center sm:justify-end flex-shrink-0">
        
        <button
          onClick={() => onToggleFait(userId, routine.id)}
          className={`w-full sm:w-14 h-7 rounded-full text-white font-light cursor-pointer ${
            routine.fait ? "bg-[#041F9B80] sm:w-16" : "bg-[#2A3EBF]"
          }`}
        >
          {routine.fait ? "Annuler" : "Fait"}
        </button>

        <button
          className="w-full sm:w-20 h-7 bg-[#0C287B] rounded-full font-light text-white cursor-pointer"
          onClick={() => onDeleteRoutine(userId, routine.id)}
        >
          Supprimer
        </button>

      </div>

    </div>
  );
}

export default RoutineCard;