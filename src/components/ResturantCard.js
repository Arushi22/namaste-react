  import React from 'react'

  const ResturantCard = (props) => {  
     console.log("hey",props);
    const {resData} = props; 

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      sla
    } =   resData?.data || {}; //optional chaining
   
      
    console.log(resData)
      return (
        <div className="res-card">
          
          <img className='res-logo' alt='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/"
            + cloudinaryImageId } />
         <h3>{name}</h3>
         <h4>{(cuisines ?? []).join(",")}</h4>
         <h4>{avgRating}</h4>
         <h4>{sla?.deliveryTime}</h4>
        </div>
      )
  }

  export default ResturantCard