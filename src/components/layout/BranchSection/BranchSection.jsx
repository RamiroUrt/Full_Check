'use client';

import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import Logo from '../../../assets/img/LogoCom.png';
import { branchLocations } from '@/constants/mapConstant';
import AngleBox from '@/components/ui/AngleBox';

const BranchSection = () => {
  useEffect(() => {
    import('leaflet').then((L) => {
      const map = L.map('map', {
        zoomControl: false,
        attributionControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: true,
      }).setView(branchLocations[0].coordinates, 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      const customIcon = L.icon({
        iconUrl: Logo.src || Logo,
        iconSize: [100, 100],
        iconAnchor: [20, 40],
        popupAnchor: [20, -40],
      });

      branchLocations.forEach((branch) => {
        L.marker(branch.coordinates, { icon: customIcon })
          .addTo(map)
          .bindPopup(branch.popupText || branch.name);
      });
    });
  }, []);

  return (
    <section className="branch-section-container">
      <h1 className="title branch-title">Todas Nuestras Sucursales</h1>
      <div className="branch-map-container-box">
        <div className="branch-angle-box">
          <AngleBox color="var(--primary-color)" />
        </div>
        <div className="branch-map-container">
          <div id="map" style={{ height: '400px', width: '100%' }} />
        </div>
      </div>
    </section>
  );
};

export default BranchSection;
