// MapWithMarkers.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from 'react-query';
import 'leaflet/dist/leaflet.css';
import type { LatLngTuple } from 'leaflet'; // Import the LatLngTuple type

const MapWithMarkers: React.FC = () => {
  const { data } = useQuery('countryData', () =>
    fetch('https://disease.sh/v3/covid-19/countries').then((res) => res.json())
  );

  const center: LatLngTuple = [20, 0]; // Default center coordinates as LatLngTuple
  const zoom: number = 2; // Default zoom level

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '400px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {data?.map((country: any) => (
        <Marker key={country.countryInfo.iso3} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <div>
              <strong>{country.country}</strong>
              <br />
              Active: {country.active}
              <br />
              Recovered: {country.recovered}
              <br />
              Deaths: {country.deaths}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapWithMarkers;
