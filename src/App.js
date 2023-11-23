import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { filterData, apiUrl } from './data'
import Spinner from './components/Spinner';
import "./App.css"
const App = () => {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true)

	const getData = () => {
		setLoading(true)
		fetch(apiUrl, {
			method: 'get'
		}).then((resp) => {
			return resp.json()
		}).then((res) => {
			console.log(res)
			setLoading(false)
			setCourses(res.data)
		}).catch((err) => {
			setLoading(true)
			console.log("error==>>", err)

		})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div className='outer'>
			<div className='navbar'>
				<Navbar />
			</div>
			<div className='filterData'>
				<Filter filterData={filterData} />
			</div>
			<div className='Cards'>
				{
					loading ? (<Spinner />) : (<Cards courses={courses} />)
				}
			</div>
		</div>
	)
}

export default App
