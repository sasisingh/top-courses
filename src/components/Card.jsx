import React from "react"
const Card = ({ selectImage }) => {
  return (
    <div className="row">
      {
        selectImage == "" && <p className="text-center">Image Not Found</p>
      }
      {
        selectImage && selectImage.map((image) => {
          return (
            <div className="col-sm-6 col-lg-4">
              <img src={image} alt="picture" height="250px" width="300px" className="m-4" />
            </div>
          )
        }
        )
      }
    </div>
  )
}
export default Card