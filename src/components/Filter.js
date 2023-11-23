import React from 'react'
import "../App.css"

const Filter = ({ filterData, category, setCategory }) => {
    function filterHandler(title) {
        setCategory(title);
    }
    return (
        <div>
            {
                filterData.map((item) => {
                    return (
                        <>
                            {
                                category === item.title ?
                                    <button className='filterbtn' key={item.id} style={{ background: "rgb(34, 29, 46)", opacity: ".9", border: "2px solid white", color: "white" }}
                                        onClick={() => filterHandler(item.title)}>{item.title}</button> :
                                    <button className='filterbtn' key={item.id} style={{ background: " rgb(67, 67, 88)" }}
                                        onClick={() => filterHandler(item.title)}>{item.title}</button>
                            }

                        </>

                    )
                })
            }
        </div>
    )
}

export default Filter
