import './index.css'
import AddRoutineForm from "./Componants/AddRoutineForm.jsx"
import UserList from './Componants/UserList.jsx'
import { useState, useEffect } from "react";

function App() {
  // Initialisation depuis localStorage ou fallback sur userData par défaut
  const defaultUserData = [
    {
      "id": 1,
      "name": "Clara",
      "avatar": "/alice.webp",
      "routines": [
        { "id": 1, "title": "Boire d’eau au réveil", "fait": false },
        { "id": 2, "title": "Marcher 5000 pas", "fait": true }
      ]
    },
    {
      "id": 2,
      "name": "Anna",
      "avatar": "/alice-removebg.png",
      "routines": [
        { "id": 201, "title": "Planifier la journée", "fait": false },
        { "id": 202, "title": "Faire du sport", "fait": true },
        { "id": 203, "title": "Lire 10 pages", "fait": false }
      ]
    },
    {
      "id": 3,
      "name": "Job",
      "avatar": "./alice-removebg (2).png",
      "routines": [
        { "id": 201, "title": "Limiter réseaux sociaux", "fait": false },
        { "id": 202, "title": "Dormir 7h", "fait": true }
      ]
    }
  ];

  const [users, setUsers] = useState(() => {
    const stored = localStorage.getItem("userDataLS");
    return stored ? JSON.parse(stored) : defaultUserData;
  });

  useEffect(() => {
    localStorage.setItem("userDataLS", JSON.stringify(users));
  }, [users]);
const handleDeleteRoutine = (userId, routineId) => {
  const updatedUsers = users.map(user => {
    if (user.id === userId) {
      return {
        ...user,
        routines: user.routines.filter(r => r.id !== routineId)
      };
    }
    return user;
  });
  setUsers(updatedUsers);
};
  const toggleFait = (userId, routineId) => {
  setUsers(prev =>
    prev.map(user =>
      user.id === userId
        ? {
            ...user,
            routines: user.routines.map(r =>
              r.id === routineId ? { ...r, fait: !r.fait } : r
            ),
          }
        : user
    )
  );
};

  return (
    <div className="max-w-[1020px] flex flex-col space-y-6 pb-6 justify-center mx-auto">
      <AddRoutineForm users={users} setUsers={setUsers} />
      <UserList onToggleFait={toggleFait} users={users} onDeleteRoutine={handleDeleteRoutine} />
    </div>
  )
}

export default App;
