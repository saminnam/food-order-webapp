import React from 'react';
import './AppDownload.css';
import { Assets } from '../../Assets/Assets';

const AppDownload = () => {
  return (
    <div className='app_download' id='app_download'>
      <p>For Better Experience Download <br/>Fit Foodie Finds</p>
      <div className='app_download_platforms'>
        <img src={Assets.play_icon} alt='' height={60}/>
        <img src={Assets.appstore_icon} alt='' height={64}/>
      </div>
    </div>
  )
}

export default AppDownload
