import React from 'react'
import "../App.css"

const Filter = ({filterData}) => {
    return (
        <div>
           {
             filterData.map((item)=>{
                return(
                    <button className='filterbtn'>{item.title}</button>
                )
             })
           }
        </div>
    )
}

export default Filter
