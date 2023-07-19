import { useEffect,useState } from "react";
import { swiggy_menu_api_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch(swiggy_menu_api_URL + resId);
        const json = await data.json();
        setresInfo(json.data);
    };
    return resInfo;
};

export default useRestaurantMenu;