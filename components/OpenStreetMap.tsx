import {
  CircleMarker,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type MapMarker = {
  latitude: number;
  longitude: number;
  popup: string;
  accuracy: number;
  color: string;
};

type MapProps = {
  zoom: number;
  latitude: number;
  longitude: number;
  wheelZoom?: boolean;
  height?: number | string;
  width?: number | string;
  markers: MapMarker[];
};

const OpenStreetMap = (props: MapProps) => {
  const myIcon = L.icon({
    iconUrl: "/marker-icon.png",
    iconRetinaUrl: "/marker-icon-2x.png",
    iconSize: [24, 32],
    iconAnchor: [16, 32],
  });

  return (
    <MapContainer
      center={[props.latitude, props.longitude]}
      zoom={props.zoom}
      scrollWheelZoom={props.wheelZoom}
      style={{ height: props.height, width: props.width }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url={
          "https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=" +
          process.env.NEXT_PUBLIC_APIKEY_THUNDERFOREST
        }
      />
      {props.markers.map((marker, index) => (
        <CircleMarker
          center={[marker.latitude, marker.longitude]}
          key={index}
          radius={marker.accuracy}
          pathOptions={{ color: marker.color }}
        >
          <Popup>{marker.popup}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default OpenStreetMap;
