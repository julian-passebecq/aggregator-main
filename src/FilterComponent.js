import React, { useState, useEffect, useCallback } from 'react';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const FilterComponent = ({ subFilters = [], onFilterSelect, subFilterLogic, setSubFilterLogic }) => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const subFilterIcons = {
    'Power BI': '/icons/pb.svg',
    'Snowflake': '/icons/sw.png',
    'Dynamics 365': '/icons/d365.png',
    'Dashboard': '/icons/d.png',
    'DAX': '/icons/dax.svg',
    'Power Query': '/icons/pq.png',
    'Python': '/icons/python.svg',
    'Pandas': '/icons/panda.svg',
    'Jupyter': '/icons/jupyter.svg',
    'Polars': '/icons/polars.png',
    'Azure Fabric': '/icons/fabric.svg',
    'BigQuery': '/icons/bg.svg',
    'Synapse': '/icons/synapse.svg',
    'AWS': '/icons/aws.svg',
    'Data Factory': '/icons/data.svg',
    'Scikit-Learn': '/icons/sick.svg',
    'R': '/icons/r.svg',
    'AutoML': '/icons/auto.svg',
    'Colab': '/icons/colab.svg',
    'TensorFlow': '/icons/tensorf.svg',
    'Keras': '/icons/keras.svg',
  };

  const handleToggle = useCallback((filterName) => () => {
    setSelectedFilters(prevFilters => {
      if (filterName === 'All') {
        return [];
      } else {
        const currentIndex = prevFilters.indexOf(filterName);
        if (currentIndex === -1) {
          return [...prevFilters, filterName];
        } else {
          return prevFilters.filter(filter => filter !== filterName);
        }
      }
    });
  }, []);

  useEffect(() => {
    onFilterSelect(selectedFilters);
  }, [selectedFilters, onFilterSelect]);

  return (
    <List component="nav" aria-label="filter list">
      <ListItem
        dense
        button
        onClick={handleToggle('All')}
      >
        <ListItemIcon>
          <span role="img" aria-label="All">🌐</span>
        </ListItemIcon>
        <ListItemText primary="All Articles" />
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={selectedFilters.length === 0}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-label': 'Select All' }}
          />
        </ListItemIcon>
      </ListItem>
      {subFilters.map(filter => {
        const labelId = `checkbox-list-label-${filter}`;
        const iconSrc = subFilterIcons[filter] || '/icons/default-icon.png';

        return (
          <ListItem
            key={filter}
            dense
            button
            onClick={handleToggle(filter)}
          >
            <ListItemIcon>
              <img src={iconSrc} alt={filter} width="24" height="24" />
            </ListItemIcon>
            <ListItemText id={labelId} primary={filter} />
            <ListItemIcon>
              <Checkbox
                edge="end"
                checked={selectedFilters.includes(filter)}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
          </ListItem>
        );
      })}
    </List>
  );
};

export default React.memo(FilterComponent);