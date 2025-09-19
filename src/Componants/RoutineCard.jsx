// RoutineCard.jsx
function RoutineCard({ routine, userId, onToggleFait, onDeleteRoutine }) {
  return (
    <div className='flex justify-between items-center bg-black/4 w-72 h-12 rounded-lg p-2 mx-2.5 mb-3'>
      <p className={routine.fait ? 'line-through' : ''}>{routine.title}</p>
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => onToggleFait(userId, routine.id)}
          className={`w-14 h-7 text-sm rounded-lg text-white cursor-pointer ${routine.fait ? 'bg-[#84DEE9] w-16' : 'bg-blue-500'}`}
        >
          {routine.fait ? 'Annuler' : 'Fait'}
        </button>
        <button
          className='w-20 h-7 text-sm bg-[#157A86] rounded-lg text-white'
          onClick={() => onDeleteRoutine(userId, routine.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
export default RoutineCard;