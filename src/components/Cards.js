import React, { useState } from 'react';
import Card from './Card';
import "../App.css"

const Cards = ({ courses, category }) => {

    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData)
                })
            })
            return allCourses;
        }
        else {
            return courses[category]
        }

    }
    return (
        <div className='cards'>
            {
                getCourses().map((courses) => {
                    return (
                        <Card course={courses}
                            likedCourses={likedCourses}
                            setLikedCourses={setLikedCourses} />
                    )
                })
            }

        </div>
    )
}

export default Cards
