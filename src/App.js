import { useState } from "react";
import Activities from "./components/Activities";
import AddActivity from "./components/AddActivity";
import Header from "./components/Header";

function App() {
  const [showAddActivity, setShowAddActivity] = useState(false)
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: 'Learn React',
      time: 'Feb 8th at 3:30pm',
      finished: true,
    },
    {
      id: 2,
      name: 'Go to Gym',
      time: 'Feb 9th at 7:30pm',
      finished: false,
    },
    {
      id: 3,
      name: 'Clean Apartment',
      time: 'Feb 10th at 1:30pm',
      finished: false,
    },
  ])

  const addActivity = (activity) => {
    const id = Math.floor(Math.random() * 10000) + 1
    // ...task is remainder of task
    const newActivity = { id, ...activity }
    setActivities([...activities, newActivity])
  }

  const toggleFinished = (id) => {
    setActivities(activities.map((activity) => activity.id === id
      ? { ...activity, finished: !activity.finished }
      : activity))
  }

  return (
    <div className='container'>
      <Header 
        onAdd={() => setShowAddActivity(!showAddActivity)} 
        showAdd={showAddActivity} />
      <>
        {showAddActivity && <AddActivity onAdd={addActivity} />}
        {activities.length > 0 
          ? <Activities activities={activities} onToggle={toggleFinished} />
          : ('No Activities')}
      </>
    </div>
  )
}

export default App;
