import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

function Logos() {
  return (
    <AppBar position="static" sx={{ 
      backgroundColor: 'transparent', 
      width: '100%',
      boxShadow: 'none', // Remove default shadow
      borderBottom: '3px solid black', // Add thin black line at the bottom
    }}>
      <Toolbar disableGutters sx={{ width: '100%', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div style={{ textAlign: 'center', margin: '0 10px' }}>
            <a href="https://github.com/txn100" target="_blank" rel="noopener noreferrer">
              <img src="/icons/associate.svg" alt="GitHub Logo" style={{ width: '65px' }} />
            </a>
          </div>

          <div style={{ textAlign: 'center', margin: '0 10px' }}>
            <a href="https://portfolio.passebecq.ch" target="_blank" rel="noopener noreferrer">
              <img src="/icons/suitcase.png" alt="Link Logo" style={{ width: '45px' }} />
            </a>
            <p style={{ margin: 0, color: 'black' }}>Portfolio </p>
          </div>

          <div style={{ height: '50px', width: '2px', backgroundColor: 'grey', margin: '0 20px' }}></div>

          <div style={{ textAlign: 'center', margin: '0 10px' }}>
            <a href="https://learn.microsoft.com/en-us/users/19704116/credentials/332f95a810911279" target="_blank" rel="noopener noreferrer">
              <img src="/icons/sql.svg" alt="SQL Logo" style={{ width: '30px' }} />
            </a>
            <p style={{ margin: 0, color: 'black' }}>SQL </p>
          </div>

          <div style={{ textAlign: 'center', margin: '0 10px' }}>
            <a href="https://learn.microsoft.com/en-us/users/19704116/credentials/c0fe2805ddb338d6" target="_blank" rel="noopener noreferrer">
              <img src="/icons/pb.svg" alt="Power BI Logo" style={{ width: '40px' }} />
            </a>
            <p style={{ margin: 0, color: 'black' }}>PowerBI </p>
          </div>

          <div style={{ textAlign: 'center', margin: '0 10px' }}>
            <a href="https://learn.microsoft.com/api/credentials/share/en-us/19704116/4BB2B11839A66213?sharingId=C46C881A4E359386" target="_blank" rel="noopener noreferrer">
              <img src="/icons/azure.svg" alt="Azure Logo" style={{ width: '45px' }} />
            </a>
            <p style={{ margin: 0, color: 'black' }}>Azure </p>
          </div>

          <div style={{ textAlign: 'center', margin: '0 10px', marginTop: '5px' }}>
            <a href="https://learn.microsoft.com/en-us/users/19704116/credentials/f2a6ce71463de3cf" target="_blank" rel="noopener noreferrer">
              <img src="/icons/fabric.svg" alt="Fabric Logo" style={{ width: '45px' }} />
            </a>
            <p style={{ margin: 0, color: 'black' }}>Fabric </p>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Logos;
