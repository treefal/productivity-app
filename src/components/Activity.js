import { FaTimes } from "react-icons/fa";

const Activity = ({ activity, onDelete, onToggle }) => {
  return (
    <div className={`activity ${activity.finished ? 'finished' : ''}`}
      onDoubleClick={() => onToggle(activity.id)}>
      <h3>
        {activity.name} 
        <FaTimes 
          style={{ color: 'red', cursor: 'pointer' }} 
          onClick={() => onDelete(activity.id)}/>
      </h3>
      <p>{activity.time}</p>
    </div>
  )
}

export default Activity
