import React from 'react'
var options = require('../Resources/API_List.json')
export default function Dropdown(props) {
  return (
    <div className=' m-2 h-16 p-2 ml-20 max-w-sm rounded-md '>

        <select value={props.data} className='bg-slate-300 ' onChange={(e)=>{props.setData(e.target.value)}}>
            <option value="https://api.data.gov.in/resource/0cde42d3-5f49-4d2a-996c-4dfc4b2e2596?api-key=579b464db66ec23bdd00000125513b3ec8994de655a472e69ce5f96f&format=json&limit=29">State-wise Share of Union Taxes and Duties released to the State Governments from 2017-18 to 2022-23</option>
            <option value="https://api.data.gov.in/resource/e838e64b-2194-4490-9470-b0a1f4c0a864?api-key=579b464db66ec23bdd00000125513b3ec8994de655a472e69ce5f96f&format=json&limit=30">state/UTs-wise Cumulative Rooftop Solar Capacity Installed in the Government Buildings (in Reply to Starred Question as on 20-12-2022)</option>
            <option value="https://api.data.gov.in/resource/2e0139a4-d59b-44d8-b7d5-a506c5a093c2?api-key=579b464db66ec23bdd00000125513b3ec8994de655a472e69ce5f96f&format=json&limit=30">State/UT-wise Contribution of Crop and Live Stock Sector in Gross State Domestic Product (GSDP) of States at Current Prices from 2017-18 to 2022-23</option>
        </select>
    </div>
  )
}
