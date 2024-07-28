import React from 'react';
import ResturantCard from './ResturantCard';
//import resList from '../utils/mockData';

function Body() {

  const listOfResturant = [];

  return (
    <div className="body">
      <div className="filter">
        <button className='filter-btn' onClick={()=>{
          console.log("Button clicked")
        }}>
          Top Rated resturants
        </button>
      </div>
      <div className="res-container">
        {
          listOfResturant.map((resturant)=> 
            <ResturantCard key={resturant.data.id} resData={resturant} 
          />)
        }
      </div>
    </div>
  )
}

export default Body