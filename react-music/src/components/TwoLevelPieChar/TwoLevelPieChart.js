import React from 'react';
import { Radar, RadarChart, PolarGrid, 
         PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import {
  ChasingDots
} from 'better-react-spinkit';
import './TwoLevelPieChart.css';

const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

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