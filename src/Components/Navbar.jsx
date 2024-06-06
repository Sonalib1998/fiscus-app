import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Page1 from './PageOne'
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          TabIndicatorProps={{ style: { background: "grey" }}}
        >
          <Tab 
              label={<span style={{ color: value === 0 ? '#D7D8DA':'inherit' }}>Item 1</span>}
              {...a11yProps(1)} 
              sx={{
                backgroundColor: value === 0 ? '#2A3958' : 'inherit',
              }}
          />
          <Tab 
            label={<span style={{ color: value === 1 ? '#D7D8DA':'inherit' }}>Item 2</span>}
            {...a11yProps(1)} 
            sx={{
              backgroundColor: value === 1 ? '#2A3958' : 'inherit', 
            }}
          />
          <Tab 
               label={<span style={{ color: value === 2 ? '#D7D8DA':'inherit' }}>Item 3</span>}
               {...a11yProps(1)} 
               sx={{
                 backgroundColor: value === 2 ? '#2A3958' : 'inherit',
               }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Page1/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}
