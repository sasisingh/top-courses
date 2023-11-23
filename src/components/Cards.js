import React from 'react';
import Card from './Card';
import "../App.css"

const Cards = ({ courses }) => {
    console.log("coufgfgfd==>", courses)
    const getCourses = () => {
        let allCourses = [];
        Object.values(courses).forEach((array) => {
            array.forEach((courseData) => {
                allCourses.push(courseData)
            })
        })
        return allCourses;
    }
    return (
        <div className='cards'>
            {
                getCourses().map((couses) => {
                    return (
                        <Card courses={couses} />
                    )
                })
            }

        </div>
    )
}

export default Cards
