import React, { useState, useEffect } from 'react';
import ResturantCard from './ResturantCard';
import resList from "../utils/mockData";
import Shimmer from './Shimmer';

function Body() {
  const[listOfResturants, setListOfResturants] = useState([]);
  const[filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN'
    )

    const json = await data.json();

    const restaurants = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (restaurants) {
      setListOfResturants(restaurants);
      setFilteredResturant(restaurants);
    } else {
      console.error("Restaurants data is not available in the response");
    }
    
  }

  const filterTopRated = () => {
    setListOfResturants(
      filteredList = resList.filter(
        (res) => res.data.avgRating > 4
      )
    )
    console.log(filteredList);
  };

  if(filteredResturant?.length === 0)
    return <h1>No Resturant match your filter!!</h1>

  return listOfResturants.length === 0 ? 
  <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className='search'>
          <input type='text' className='search-box' value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
            }} />
          <button onClick={() => {
            // filter the restro card and update the UI
            // search-text
            console.log(searchText);

            const filteredRestro = listOfResturants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredResturant(filteredRestro);
          }}
          >Search</button>
        </div>
        <button className='filter-btn'
          onClick={filterTopRated}>
          Top Rated resturants
        </button>
      </div>
      <div className="res-container">
        {
          filteredResturant.map((resturant) =>
            <ResturantCard key={resturant.info.id} resData={resturant} />)
        }
      </div>
    </div>
  )
}

export default Body