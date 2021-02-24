import { useState } from "react";
import Activities from "./components/Activities";
import Header from "./components/Header";

function App() {
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

  return (
    <div className='container'>
      <Header />
      <Activities activities={activities} />
    </div>
  )
}

export default App;
