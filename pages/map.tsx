import dynamic from "next/dynamic";
import { fetchTracks } from "../helpers/fetchTracks";

export default function Map() {
  const OpenStreetMap = dynamic(() => import("../components/OpenStreetMap"), {
    ssr: false,
    loading: () => <p>A map is loading</p>,
  });

  const markers = fetchTracks().then((result) => {
    return result;
  });

  return (
    <OpenStreetMap
      zoom={12}
      latitude={51.525}
      longitude={-3.145}
      wheelZoom={true}
      height={500}
      width="100%"
      markers={[
        {
          latitude: 51.52,
          longitude: -3.14,
          popup: "Team 1 - 3 minutes ago",
          accuracy: 3,
          color: "red",
        },
        {
          latitude: 51.521,
          longitude: -3.141,
          popup: "Team 1 - 15 minutes ago",
          accuracy: 3,
          color: "red",
        },
        {
          latitude: 51.525,
          longitude: -3.145,
          popup: "Team 2 - now",
          accuracy: 25,
          color: "green",
        },
        {
          latitude: 51.524,
          longitude: -3.143,
          popup: "Team 2 - 42 minutes ago",
          accuracy: 30,
          color: "green",
        },
      ]}
    />
  );
}
