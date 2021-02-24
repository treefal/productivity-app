import Activity from "./Activity"

const Activities = ({ activities, onToggle }) => {
  return (
    <>
      {activities.map((activity) => (
        <Activity 
          key={activity.id} 
          activity={activity}
          onToggle={onToggle} 
        />
      ))}
    </>
  )
}

export default Activities
