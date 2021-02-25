import { FaTimes, FaEdit } from "react-icons/fa";

const Activity = ({ activity, onDelete, onToggle }) => {
  return (
    <div className={`activity ${activity.finished ? 'finished' : ''}`}
      onDoubleClick={() => onToggle(activity.id)}>
      <h3>
        {activity.name}
        <ul>
          <li>
            <FaEdit
              style={{ color: 'blue', cursor: 'pointer' }}
                onClick={() => console.log(activity)}/> 
          </li>
          <li>
            <FaTimes 
              style={{ color: 'red', cursor: 'pointer' }} 
              onClick={() => onDelete(activity.id)} />
          </li>
        </ul>
      </h3>
      <p>{activity.time}</p>
    </div>
  )
}

export default Activity
