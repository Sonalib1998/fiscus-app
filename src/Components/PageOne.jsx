import React from 'react';
import TableWithPagination from './TableWithPagination';
import Button from '@mui/material/Button'; 
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const PageOne = () => {
    const [value, setValue] = React.useState(10);
    const [value1, setValue1] = React.useState(20);
    const [value2, setValue2] = React.useState(30);
    const [value3, setValue3] = React.useState(10);

    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <div style={{ marginRight: '10px', minWidth: '150px', height: '38px' }}>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={value}
                        label="Age"
                        onChange={handleChange}
                        style={{ minWidth: '150px', height: '38px' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div style={{ marginRight: '10px', minWidth: '150px', height: '38px' }}>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={value1}
                        label="Age"
                        onChange={handleChange1}
                        style={{ minWidth: '150px', height: '38px' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
                <div style={{ minWidth: '150px', height: '38px' }}>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={value2}
                        label="Age"
                        onChange={handleChange2}
                        style={{ minWidth: '150px', height: '38px' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </div>
            </div>
            <hr/>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                    <Button variant="contained" style={{ backgroundColor: '#2A3958', color: 'white' }}>Left Button</Button>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={value3}
                        label="Age"
                        onChange={handleChange3}
                        style={{ minWidth: '150px',marginRight:'10px', height: '38px' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <Button variant="contained" style={{backgroundColor: '#2A3958', color: 'white' }}>Right Button</Button>
                </div>
            </div>
            <TableWithPagination /> {/* Include your table component here */}
        </div>
    );
};

export default PageOne;
