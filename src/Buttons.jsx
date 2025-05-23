import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

export default function CategoryButtons({ onCategorySelect }) {
  // Style for the buttons
  const buttonStyle = {
    minWidth: '0px',  // Remove minimum width
    width: '70px',  // Adjust width to fit the content (the logo)
    height: '70px',  // Adjust height similarly
    padding: '10px',  // Remove padding to reduce extra space
    backgroundColor: 'transparent',
    color: 'white',
    marginLeft: '10px', // Remove any default margins
    '&:hover': {
      backgroundColor: '#bdbdbd',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
     // Ensure no padding is applied
    
  };

  const flexContainer = {
    display: 'flex',
    justifyContent: '',
    alignItems: 'center'
  };

  // Define your image URLs here
  const biImageUrl = '/icons/pb.svg';
  const analyticsImageUrl = '/icons/analytics.png';
  const cloudImageUrl = '/icons/cloud.png';
  const mlImageUrl = '/icons/coding.png';
  const allArticlesImageUrl = '/icons/all.png';

  return (
    <div style={flexContainer}>
      <Tooltip title="BI">
        <Button sx={buttonStyle} onClick={() => onCategorySelect('BI')}>
          <img src={biImageUrl} alt="BI" style={{ width: '100%', height: '100%' }} />
        </Button>
      </Tooltip>
      <Tooltip title="Analytics">
        <Button sx={buttonStyle} onClick={() => onCategorySelect('Analytics')}>
          <img src={analyticsImageUrl} alt="Analytics" style={{ width: '100%', height: '100%' }} />
        </Button>
      </Tooltip>
      <Tooltip title="Cloud">
        <Button sx={buttonStyle} onClick={() => onCategorySelect('Cloud')}>
          <img src={cloudImageUrl} alt="Cloud" style={{ width: '100%', height: '100%' }} />
        </Button>
      </Tooltip>
      <Tooltip title="Machine Learning">
        <Button sx={buttonStyle} onClick={() => onCategorySelect('Machine Learning')}>
          <img src={mlImageUrl} alt="Machine Learning" style={{ width: '100%', height: '100%' }} />
        </Button>
      </Tooltip>
      <Tooltip title="All Articles">
        <Button sx={buttonStyle} onClick={() => onCategorySelect('All Articles')}>
          <img src={allArticlesImageUrl} alt="All Articles" style={{ width: '100%', height: '100%' }} />
        </Button>
      </Tooltip>
    </div>
  );
}
