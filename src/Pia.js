import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Label } from 'recharts';

const Pia = () => {

	// Sample data
	const data = [
		{ name: 'Group A', value: 400, fill: 'red' },
    { name: 'Group B', value: 300, fill: 'blue' },
    { name: 'Group C', value: 300, fill: 'green' },
    { name: 'Group D', value: 200, fill: 'purple' },
	];

	return (

<div>

<nav class="navbar navbar-light mt-3 mb-3 ">
        <div class="container-fluid">
          <a class="navbar-brand" style={{ fontWeight: "bolder" }}>Customer <span style={{color:"gray",fontSize:"15px"}}><p>Customer that buy product</p></span></a>
         
          
        </div>
      </nav>


		<ResponsiveContainer width="100%" height={300}>


			<PieChart width={500} height={500} mt-3 mb-3 >
			{data.map((entry, index) => (
				<Pie 
				
				data={data} dataKey={"value"} outerRadius={120}
					innerRadius={100} fill={entry.fill} 
					
					
					>

					<Label value={'65% Total New Customer'} position="center" style={{fontWeight:"bold"}}/>
					
				</Pie>
				))}
			</PieChart>
		</ResponsiveContainer>

		</div>
	);
}

export default Pia;
