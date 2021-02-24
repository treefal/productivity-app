const Activity = ({ activity }) => {
  return (
    <div className='activity'>
      <h3>{activity.name}</h3>
      <p>{activity.time}</p>
    </div>
  )
}

export default Activity
