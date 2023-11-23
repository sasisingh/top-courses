import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
const Spinner = () => {
    return (
        <div>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#4fa94d"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
            <p>Loading...</p>
        </div>
    )
}

export default Spinner
