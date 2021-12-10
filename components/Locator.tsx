import { useEffect } from "react";

export function Locator() {
  console.log("Hello");

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Geolocation available");

      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        console.log("Accuracy:", position.coords.accuracy);
        console.log("Speed", position.coords.speed);
        console.log("Heading", position.coords.heading);
        console.log("Altitude", position.coords.altitude);
        console.log("Timestamp", position.timestamp);
      });
    } else {
      alert("No geolocation available");
    }
  }, []);

  return <></>;
}
