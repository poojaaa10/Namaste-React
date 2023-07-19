const swiggy_api_URL =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING";
  async function getRestaurants() {

      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      console.log("hi");
      console.log(json.data.cards[2].data);
     
  }
  getRestaurants(); 