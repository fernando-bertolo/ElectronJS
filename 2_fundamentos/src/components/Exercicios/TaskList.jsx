import React from 'react'

const TaskList = (props) => {
  return (
    <div>
      {props.task ? (
        props.task.map((task) => (
            <ul>
                <li key={task.id}>{task.text}</li>
            </ul>
        ))
      ) : (
        <h3>Não há tarefas</h3>
      )}
    </div>
  )
}

export default TaskList
