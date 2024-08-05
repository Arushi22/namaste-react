import React from 'react';
import ResturantCard from './ResturantCard';
import { useState } from 'react';
import resList from '../utils/mockData';

function Body() {
  const[listOfResturant, setlListOfResturant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className='filter-btn' onClick={()=>{
          const filteredList = listOfResturant.filter(
            res=> res.data.avgRatingString>4
          );
          setlListOfResturant(filteredList);
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