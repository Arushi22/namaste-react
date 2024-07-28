import React from 'react'

function ResturantCard(props) {
    const { resData } = props;

    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRatingString,
      deliveryTime
    } = resData?.data; //optional chaining
  
    return (
      <div className="res-card">
        <img className="res-logo"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{resData.data.sla.deliveryTime} min</h4>
      </div>
    )
}

export default ResturantCard