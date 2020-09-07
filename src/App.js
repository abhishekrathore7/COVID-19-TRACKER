import React from 'react';
import './App.css';
import{
  MenuItem,FormControl,Select
} from "@material-ui/core";

function App() {
  return (
    <div className="app">
    <div className = "app__header">
    <h1>COVID-19 TRACKER</h1>
      <FormControl className = "app__dropdown">
      <Select variant = "outlined" value = "abc">
      <MenuItem value = "worldwide">worldwide</MenuItem>
      <MenuItem value = "worldwide">worldwide1</MenuItem>
      <MenuItem value = "worldwide">worldwide2</MenuItem>
      <MenuItem value = "worldwide">worldwide3</MenuItem>
    </Select>
    </FormControl>
</div>
</div>
  );
}

export default App;
