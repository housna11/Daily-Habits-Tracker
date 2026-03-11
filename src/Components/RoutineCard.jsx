function RoutineCard({ routine, userId, onToggleFait, onDeleteRoutine }) {
  return (
    <div className='flex justify-between items-center bg-black/4 w-72 h-12 rounded-lg p-2 mx-2.5 mb-3'>
      <p className={routine.fait ? 'line-through' : ''}>{routine.title}</p>
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => onToggleFait(userId, routine.id)}
          className={`w-14 h-7 text-sm rounded-full text-white font-light cursor-pointer ${routine.fait ? 'bg-[#041F9B80] w-16' : 'bg-[#2A3EBF]'}`}
        >
          {routine.fait ? 'Annuler' : 'Fait'}
        </button>
        <button
          className='w-20 h-7 text-sm bg-[#0C287B] rounded-full font-light text-white cursor-pointer'
          onClick={() => onDeleteRoutine(userId, routine.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
export default RoutineCard;