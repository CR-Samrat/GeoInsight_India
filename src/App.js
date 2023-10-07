import IndiaMap from "./Components/IndiaMap";
import YourComponent from "./Resources/apiDatas";
import './index.css'
import { useState } from "react";
import Dropdown from "./Components/Dropdown";
import Navbar from  './Components/Navbar'
function App() {
  // JSON.parse(localStorage.getItem("myData"))
  const [data, setData] = useState("https://api.data.gov.in/resource/0cde42d3-5f49-4d2a-996c-4dfc4b2e2596?api-key=579b464db66ec23bdd00000125513b3ec8994de655a472e69ce5f96f&format=json&limit=29")
  localStorage.setItem('myApi', data);

  return (
    <div className="">
      <Navbar />
      <Dropdown data = {data} setData = {setData} />
      <YourComponent data = {data}/>
      <IndiaMap/>
    </div>
  );
}

export default App;
