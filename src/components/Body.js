import React from 'react';
import ResturantCard from './ResturantCard';
import { useState, useEffect } from 'react';

function Body() {
  const[listOfResturant, setlListOfResturant] = useState([]);

  useEffect(()=>{
    fetchData();
  }, [])

 const fetchData = async () => {
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
  );

  const json = await data.json();
  
  console.log(json);
  setlListOfResturant(json.data.cards[0].card.card.imageGridCards);
}

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
            <ResturantCard key={resturant.data.id} resData={resturant} />)
        }
      </div>
    </div>
  )
}

export default Body