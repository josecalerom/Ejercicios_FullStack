import { useState } from "react";

const useCurrentLocation = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const getCurrentLocation = () => {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          const { latitude, longitude } = position.coords
          setCurrentLocation({ latitude, longitude });
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        }
      );
    };
  
    return { currentLocation, onLocation: getCurrentLocation, error, loading };
  };
  
  export default useCurrentLocation;