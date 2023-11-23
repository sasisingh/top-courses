import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify"
import "../App.css"

const Card = ({ course, likedCourses, setLikedCourses }) => {

	function clickHandler() {
		if (likedCourses.includes(course.id)) {
			setLikedCourses((prev) =>
				prev.filter((cid) => cid !== course.id)
			)
			toast.warning("Like removed")
		}
		else {
			if (likedCourses.length === 0) {
				setLikedCourses([course.id])
			}
			else {
				setLikedCourses((prev) => [...prev, course.id])
			}
			toast.success("Like Successfully")
		}
	}

	return (
		<div className='card'>
			<img src={course.image.url} className='image' alt='course' />

			<button className='likebtn' onClick={clickHandler}>
				{
					likedCourses.includes(course.id) ?
						<FcLike style={{ "fontSize": "20px" }} /> :
						<FcLikePlaceholder style={{ "fontSize": "20px" }} />

				}

			</button>
			<div className='description'>
				<h4>{course.title}</h4>
				<p>
					{
						course.description.length > 150 ?
							(course.description.substr(0, 150)) + "..." : (course.description)
					}
				</p>
			</div>

		</div>

	)
}

export default Card
