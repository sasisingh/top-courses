import React from "react"
const Card = ({ selectImage }) => {
  return (
    <div className="row" style={{marginBottom:"70px"}} >
      {
        selectImage == "" && <b className="text-center mt-5">Image Not Found</b>
      }
      {
        selectImage && selectImage.map((image) => {
          return (
            <div className="col-sm-6 col-lg-4 text-center">
              <img src={image} alt="picture" height="250px" width="300px" className="m-4" />
            </div>
          )
        }
        )
      }
    </div>
  )
}
export default Card;