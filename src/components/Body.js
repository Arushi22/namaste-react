import React, { useEffect } from 'react';
import ResturantCard from './ResturantCard';
import { useState } from 'react';

function Body() {

  const [resList, setResList] = useState([
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "393840",
    //     "name": "Chinese Wok",
    //     "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
    //     "locality": "Chikka Lakshmaiah Layout",
    //     "areaName": "Adugodi",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //       "Chinese",
    //       "Asian",
    //       "Tibetan",
    //       "Desserts"
    //     ],
    //     "avgRating": 2.2,
    //     "parentId": "61955",
    //     "avgRatingString": "4.2",
    //     "totalRatingsString": "1K+",
    //     "sla": {
    //       "deliveryTime": 39,
    //       "lastMileTravel": 2.5,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "35-40 mins",
    //       "lastMileTravelString": "2.5 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     }
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "639523",
    //     "name": "Dum Safar Biryani",
    //     "cloudinaryImageId": "1154cffac2453eb0bf7fdda7e5ea1659",
    //     "locality": "7th Block",
    //     "areaName": "DAVAR ATRIUM",
    //     "costForTwo": "₹500 for two",
    //     "cuisines": [
    //       "Biryani",
    //       "Kebabs",
    //       "Tandoor",
    //       "Indian",
    //       "Desserts"
    //     ],
    //     "avgRating": 2.5,
    //     "parentId": "351013",
    //     "avgRatingString": "3.5",
    //     "totalRatingsString": "50+",
    //     "sla": {
    //       "deliveryTime": 49,
    //       "lastMileTravel": 1.4,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "45-50 mins",
    //       "lastMileTravelString": "1.4 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "737688",
    //     "name": "Wow! China",
    //     "cloudinaryImageId": "95982cfa57cb3b7e504f2015c375fd55",
    //     "locality": "KORAMANGALA LAYOUT EXTENSION",
    //     "areaName": "KORAMANGALA",
    //     "costForTwo": "₹300 for two",
    //     "cuisines": [
    //       "Tibetan",
    //       "Chinese",
    //       "Asian",
    //       "Snacks",
    //       "Continental",
    //       "Desserts",
    //       "Beverages"
    //     ],
    //     "avgRating": 1,
    //     "parentId": "226836",
    //     "avgRatingString": "4.0",
    //     "totalRatingsString": "100+",
    //     "sla": {
    //       "deliveryTime": 33,
    //       "lastMileTravel": 0.1,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "30-35 mins",
    //       "lastMileTravelString": "0.1 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     }
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "93741",
    //     "name": "Subway",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/2/877b99a7-fdcc-40c6-a19a-684a746243aa_93741.jpg",
    //     "locality": "The Nexus Mall",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "Salads",
    //       "Snacks",
    //       "Desserts",
    //       "Beverages"
    //     ],
    //     "avgRating": 1,
    //     "parentId": "2",
    //     "avgRatingString": "4.0",
    //     "totalRatingsString": "5K+",
    //     "sla": {
    //       "deliveryTime": 35,
    //       "lastMileTravel": 1.6,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "35-40 mins",
    //       "lastMileTravelString": "1.6 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "622030",
    //     "name": "MOJO Pizza - 2X Toppings",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/39cb95eb-d5ec-43d5-bd0b-e3f7b65a7d94_622030.JPG",
    //     "locality": "Patel Narayana Reddy Layout",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //       "Pizzas",
    //       "Italian",
    //       "Fast Food",
    //       "Desserts"
    //     ],
    //     "avgRating": 4.5,
    //     "parentId": "11329",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "500+",
    //     "sla": {
    //       "deliveryTime": 25,
    //       "lastMileTravel": 0.8,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "15-25 mins",
    //       "lastMileTravelString": "0.8 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "750225",
    //     "name": "Daily Kitchen - Homely Meals",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/19/4ec6a5b6-7c8d-4e10-b8a3-317922e419da_750225.JPG",
    //     "locality": "6TH BLOCK",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹400 for two",
    //     "cuisines": [
    //       "Home Food",
    //       "Indian",
    //       "North Indian",
    //       "Thalis"
    //     ],
    //     "avgRating": 4.2,
    //     "parentId": "444382",
    //     "avgRatingString": "4.2",
    //     "totalRatingsString": "100+",
    //     "sla": {
    //       "deliveryTime": 30,
    //       "lastMileTravel": 0.8,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "20-30 mins",
    //       "lastMileTravelString": "0.8 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "10576",
    //     "name": "Pizza Hut",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/87e56c63-b521-4257-96ae-a42229b92009_10576.jpg",
    //     "locality": "6th Block",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "Pizzas"
    //     ],
    //     "avgRating": 1.2,
    //     "parentId": "721",
    //     "avgRatingString": "4.2",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 37,
    //       "lastMileTravel": 0.6,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "35-40 mins",
    //       "lastMileTravelString": "0.6 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "23678",
    //     "name": "McDonald's",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/1fe8039a-0a1a-41f8-8db1-f3521ba8fada_23678.jpg",
    //     "locality": "5th Block",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹400 for two",
    //     "cuisines": [
    //       "Burgers",
    //       "Beverages",
    //       "Cafe",
    //       "Desserts"
    //     ],
    //     "avgRating": 4.5,
    //     "parentId": "630",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 36,
    //       "lastMileTravel": 1.3,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "35-40 mins",
    //       "lastMileTravelString": "1.3 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "5934",
    //     "name": "Burger King",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
    //     "locality": "Koramangala",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹350 for two",
    //     "cuisines": [
    //       "Burgers",
    //       "American"
    //     ],
    //     "avgRating": 4.3,
    //     "parentId": "166",
    //     "avgRatingString": "4.3",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 60,
    //       "lastMileTravel": 1.4,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "60-65 mins",
    //       "lastMileTravelString": "1.4 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "10820",
    //     "name": "California Burrito",
    //     "cloudinaryImageId": "b58sysfvskincfwmgoqd",
    //     "locality": "Koramangala",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹250 for two",
    //     "cuisines": [
    //       "Mexican",
    //       "American",
    //       "Salads",
    //       "Continental",
    //       "Keto",
    //       "Healthy Food",
    //       "Beverages",
    //       "Snacks",
    //       "Desserts",
    //       "Fast Food"
    //     ],
    //     "avgRating": 1.6,
    //     "parentId": "1252",
    //     "avgRatingString": "4.6",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 43,
    //       "lastMileTravel": 1.2,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "40-45 mins",
    //       "lastMileTravelString": "1.2 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "50467",
    //     "name": "Bakingo",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/5/b419bd02-617a-4e08-8445-abdce54531ab_50467.JPG",
    //     "locality": "1st Block",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹300 for two",
    //     "cuisines": [
    //       "Bakery",
    //       "Desserts",
    //       "Beverages",
    //       "Snacks"
    //     ],
    //     "avgRating": 1.5,
    //     "parentId": "3818",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "10K+",
    //     "sla": {
    //       "deliveryTime": 33,
    //       "lastMileTravel": 2.6,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "30-35 mins",
    //       "lastMileTravelString": "2.6 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "524936",
    //     "name": "Theobroma",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/2fd6bc72-ea81-4b40-a949-252e6825c357_524936.jpg",
    //     "locality": "7th Sector",
    //     "areaName": "HSR Layout",
    //     "costForTwo": "₹400 for two",
    //     "cuisines": [
    //       "Desserts",
    //       "Bakery",
    //       "Beverages"
    //     ],
    //     "avgRating": 2.6,
    //     "parentId": "1040",
    //     "avgRatingString": "4.6",
    //     "totalRatingsString": "5K+",
    //     "sla": {
    //       "deliveryTime": 29,
    //       "lastMileTravel": 4.2,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "25-30 mins",
    //       "lastMileTravelString": "4.2 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //       "nextCloseTime": "2024-08-11 00:00:00",
    //       "opened": true
    //     },
    //     "badges": {
    //       "imageBadges": [
    //         {
    //           "imageId": "Rxawards/_CATEGORY-Desserts.png",
    //           "description": "Delivery!"
    //         },
    //         {
    //           "imageId": "newg.png",
    //           "description": "Gourmet"
    //         }
    //       ]
    //     },
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //       "entityBadges": {
    //         "imageBased": {
    //           "badgeObject": [
    //             {
    //               "attributes": {
    //                 "description": "Delivery!",
    //                 "imageId": "Rxawards/_CATEGORY-Desserts.png"
    //               }
    //             },
    //             {
    //               "attributes": {
    //                 "description": "Gourmet",
    //                 "imageId": "newg.png"
    //               }
    //             }
    //           ]
    //         },
    //         "textBased": {

    //         },
    //         "textExtendedBadges": {

    //         }
    //       }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //       "header": "15% OFF",
    //       "discountTag": "FLAT DEAL"
    //     },
    //     "differentiatedUi": {
    //       "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //       "differentiatedUiMediaDetails": {
    //         "mediaType": "ADS_MEDIA_ENUM_IMAGE",
    //         "lottie": {

    //         },
    //         "video": {

    //         }
    //       }
    //     },
    //     "reviewsSummary": {

    //     },
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {

    //     },
    //     "externalRatings": {
    //       "aggregatedRating": {
    //         "rating": "--"
    //       }
    //     },
    //     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //   },
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "711368",
    //     "name": "Salad Days",
    //     "cloudinaryImageId": "cfa1123ebf17413dc7d0a80c7361fab3",
    //     "locality": "BTM Layout",
    //     "areaName": "HSR",
    //     "costForTwo": "₹500 for two",
    //     "cuisines": [
    //       "Salads"
    //     ],
    //     "avgRating": 1.5,
    //     "parentId": "796",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "1K+",
    //     "sla": {
    //       "deliveryTime": 29,
    //       "lastMileTravel": 3.8,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "25-30 mins",
    //       "lastMileTravelString": "3.8 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     }
    //   }
    // },
    // {
    //   type: "resturant",
    //   data: {
    //     "id": "381853",
    //     "name": "ITC Master Chef Creations",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/3/5f883c8c-ba8b-4656-92fb-eb27abd48e2e_381853.JPG",
    //     "locality": "Koramangala",
    //     "areaName": "Koramangala",
    //     "costForTwo": "₹650 for two",
    //     "cuisines": [
    //       "North Indian",
    //       "Biryani",
    //       "Kebabs",
    //       "Mediterranean",
    //       "Mughlai"
    //     ],
    //     "avgRating": 2.5,
    //     "parentId": "11992",
    //     "avgRatingString": "4.5",
    //     "totalRatingsString": "1K+",
    //     "sla": {
    //       "deliveryTime": 45,
    //       "lastMileTravel": 1.4,
    //       "serviceability": "SERVICEABLE",
    //       "slaString": "45-50 mins",
    //       "lastMileTravelString": "1.4 km",
    //       "iconType": "ICON_TYPE_EMPTY"
    //     },
    //   }
    // }
  ])

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN"
    );

    const json = await data.json();

    // console.log(json);

    // console.log(json.data.cards[3].card.card.imageGridCards);
    setResList(json.data.cards[3].card.card.imageGridCards)

  }

  return (
    <div className="body">
      <div className="filter">
        <button className='filter-btn' 
        onClick={() => {
          const filteredList = resList.filter(
            (res) => res.data.avgRating > 4
          );
          setResList(filteredList)
          // console.log(filteredList)
        }}>
          Top Rated resturants
        </button>
      </div>
      <div className="res-container">
        {
         Array.isArray(resList) && resList.length > 0 ? (
          resList.map((restaurant, i) => (
            <ResturantCard key={i} resData={restaurant} />
          ))
        ) : (
          <p>No restaurants available</p>
        )
        }

      </div>
    </div>
  )
}

export default Body