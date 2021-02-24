const Activity = ({ activity, onToggle }) => {
  return (
    <div className={`activity ${activity.finished ? 'finished' : ''}`}
      onDoubleClick={() => onToggle(activity.id)}>
      <h3>{activity.name}</h3>
      <p>{activity.time}</p>
    </div>
  )
}

export default Activity
