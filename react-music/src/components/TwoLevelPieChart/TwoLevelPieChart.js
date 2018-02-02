import React from 'react';
import { Radar, RadarChart, PolarGrid, 
         PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import {
  ChasingDots
} from 'better-react-spinkit';
import './TwoLevelPieChart.css';

const TwoLevelPieChart = ({genre, loading}) =>{
    if(loading){
        return <div className='Loading'>
            <ChasingDots color='white' size={60}/>
        </div>
    }
    
  	return (
    	<RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={genre}>
          <PolarGrid />
          <PolarAngleAxis dataKey="genre" />
          <PolarRadiusAxis/>
          <Radar name="Mike" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
        </RadarChart>
    );

}

export default TwoLevelPieChart