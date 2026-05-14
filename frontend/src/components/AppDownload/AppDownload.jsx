import React from 'react';
// Style Connection
import './AppDownload.css';
// Assets Connection
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>

      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
