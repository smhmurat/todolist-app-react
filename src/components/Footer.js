import React from 'react'

function Footer({ todos, setTodos, setStatus}) {


  const statusHandler = (e) => {
    setStatus(e.target.id)
  }


  return (
    <footer className='footer'>
      <span className="todo-count">
        <strong>0 </strong>
        items left
		  </span>

		<ul className="filters">
			<li>
				<a onClick={statusHandler} className="selected" id='all'>All</a>
			</li>
			<li>
				<a onClick={statusHandler} id='active'>Active</a>
			</li>
			<li>
				<a onClick={statusHandler} id='completed'>Completed</a>
			</li>
		</ul>
		<button className="clear-completed">
			Clear completed
		</button>
    </footer>
  )
}

export default Footer