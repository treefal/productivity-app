import { useState } from 'react'

const AddActivity = ({ onAdd }) => {
  const [name, setName] = useState('')
  const [time, setTime] = useState('')
  const [finished, setFinished] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if (!name) {
      alert('Please add activity!')
      return
    }

    onAdd({ name, time, finished })

    setName('')
    setTime('')
    setFinished(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Activity</label>
        <input type='text' 
          placeholder='Add Activity' 
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input type='text' 
          placeholder='Add Day & Time'
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Done</label>
        <input type='checkbox'
          checked={finished}
          value={finished}
          onChange={(e) => setFinished(e.currentTarget.checked)} 
        />
      </div>

      <input type='submit' value='Set Activity' className='btn btn-block' />
    </form>
  )
}

export default AddActivity
