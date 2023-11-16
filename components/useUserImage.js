// useUserImage.js

import { useState, useEffect, useContext } from "react";
import UserContext from "../contexts/UserContext";

const useUserImage = () => {
  const { user } = useContext(UserContext);
  const [userImage, setUserImage] = useState(null);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    if (user && user.user && user.user.image) {
      const imageUrl = `https://apis.crmboy.com/${user.user.image}`;
      // Fetch the user image from the URL
      fetch(imageUrl)
        .then((response) => {
          if (response.ok) {
            return response.blob();
          }
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        })
        .then((blob) => {
          // Convert the image blob to a data URL
          const reader = new FileReader();
          reader.onloadend = () => {
            setUserImage(reader.result); 
          };
          reader.readAsDataURL(blob);
        })
        .catch((error) => {
          console.error("Error fetching user image:", error);
          // Store the error in state
          setFetchError(error);
        });
    }
  }, [user]);

  // Handle fetch error
  if (fetchError) {
    console.error("Error fetching user image:", fetchError);
  }

  return userImage;
};

export default useUserImage;
