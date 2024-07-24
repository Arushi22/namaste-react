import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Make sure to import the CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-li">Home</li>
          <li className="nav-li">About Us</li>
          <li className="nav-li">Contact Us</li>
          <li className="nav-li">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/" + resData.data.cloudinaryImageId} />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(",")}</h4>
      <h4>{resData.data.avgRatingString}</h4>
      <h4>{resData.data.sla.deliveryTime}</h4>
    </div>
  )
}

const resList = [
  {
    data:{
      "id": "671928",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/510f05e2-a9e7-49fe-8ab3-ea8c2eb8a5ae_671928.JPG",
    "locality": "7th Block",
    "areaName": "Koramangla",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Fast Food",
      "Rolls & Wraps"
    ],
    "avgRating": 4.3,
    "parentId": "547",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 17,
      "lastMileTravel": 1.2,
      "serviceability": "SERVICEABLE",
      "slaString": "15-20 mins",
      "lastMileTravelString": "1.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-22 02:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {

    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    }
  },
  {
   data:{
    "id": "158855",
    "name": "Candice's Gourmet Sandwiches & Wraps",
    "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
    "locality": "5th Block",
    "areaName": "Koramangala",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "Salads",
      "sandwich",
      "Snacks"
    ],
    "avgRating": 4.5,
    "parentId": "465403",
    "avgRatingString": "4.5",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 0.4,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "0.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-21 23:00:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "50% OFF",
      "subHeader": "UPTO ₹100"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   }
  },
  {
   data:{
    "id": "426776",
    "name": "Theobroma",
    "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
    "locality": "7th Block",
    "areaName": "Koramangala",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Desserts",
      "Bakery",
      "Beverages"
    ],
    "avgRating": 4.7,
    "parentId": "1040",
    "avgRatingString": "4.7",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 23,
      "lastMileTravel": 2.4,
      "serviceability": "SERVICEABLE",
      "slaString": "20-25 mins",
      "lastMileTravelString": "2.4 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-07-21 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "Rxawards/_CATEGORY-Desserts.png",
          "description": "Delivery!"
        },
        {
          "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
          "description": "gourmet"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Delivery!",
                "imageId": "Rxawards/_CATEGORY-Desserts.png"
              }
            },
            {
              "attributes": {
                "description": "gourmet",
                "imageId": "v1669879258/GFF_logo_new_xbycg6.png"
              }
            }
          ]
        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "15% OFF",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
   }
  },
  {
    data:{
      "id": "18973",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
      "locality": "Koramangala",
      "areaName": "Koramangala",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian"
      ],
      "avgRating": 4.3,
      "parentId": "2120",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-22 02:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Biryani.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                }
              }
            ]
          },
          "textBased": {
  
          },
          "textExtendedBadges": {
  
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
  
          },
          "video": {
  
          }
        }
      },
      "reviewsSummary": {
  
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
  
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "4.2",
          "ratingCount": "5K+"
        },
        "source": "GOOGLE",
        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    }
  }

]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResturantCard resData={resList[0]} />
        <ResturantCard resData={resList[1]} />
        <ResturantCard resData={resList[2]} />
        <ResturantCard resData={resList[3]} />
        <ResturantCard resData={resList[0]} />
      </div>
    </div>
  )
}
const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
