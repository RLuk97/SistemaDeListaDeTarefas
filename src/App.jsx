import { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './components/Table'
import Details from './components/Details'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
	const [filter, setFilter] = useState('')
	const [tasksArr, setTasksArr] = useState([])
  const navigate = useNavigate()

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => setTasksArr(res.data))
		// .then(() => console.log(invoicesArr))
	}, [])

	const handleCheck = (el, id) => {
		setTasksArr((prev) =>
			prev.map((e) => {
				return id === e.id ? { ...e, completed: el.checked } : e
			})
		)
	}

	return (
    <div className='p-4'>
      <Routes>
        <Route path='/' element={<Table filter={filter} setFilter={setFilter} tasksArr={tasksArr} handleCheck={handleCheck} />} />
        <Route path="/task/:taskId" element={<Details tasksArr={tasksArr} />} />
      </Routes>
    </div>
	)
}

export default App
