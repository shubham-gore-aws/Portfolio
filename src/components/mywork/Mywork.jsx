import React from 'react';
import './Mywork.css';
import theme_Pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data'; 
import arrow_icon from '../../assets/arrow_icon.svg';

const Mywork = () => {
  return (
    <div className='mywork'>
      <div className='mywork-title'>
        <h1>My latest work</h1>
        <img src={theme_Pattern} alt="Theme Pattern" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img key={index} src={work.w_img} alt={`Work ${index + 1}`} />
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
        
      </div>
    </div>
  );
}

export default Mywork;
