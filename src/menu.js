import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';




function ResponsiveAppBar() {


  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar disableGutters >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <a href="https://github.com/julian-passebecq" target="_blank" rel="noopener noreferrer">
            <img src="/icons/gt1.svg" alt="GitHub Logo" style={{ width: '30px', marginRight: '20px', marginLeft: '10px' }} />
          </a>
          <a href="https://github.com/julian-passebecq" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkd.svg" alt="Link Logo" style={{ width: '35px', marginRight: '20px' }} />
          </a>

         

     
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          
          <span> powered by </span>
            <img src="/icons/mongo.svg" alt="GitHub Logo" style={{ width: '100px', marginRight: '200px', marginLeft: '5px' }} />
      
     

     
        </Box>


        
      </Toolbar>
    </AppBar>
  );
}

export default ResponsiveAppBar;
