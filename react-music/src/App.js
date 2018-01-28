import React, { Component } from 'react';
import { 
  Header,
  ChartTest
} from './components';
import * as api from './lib/api';
import './App.css';


class App extends Component {

  getData = async () => {
    try{
      const response = await api.getData();
      
      const data = response.data;
      
      console.log(data);
    }catch(e){
      console.log(e);
    }
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, time: 1 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, time: 3 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, time: 9 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, time: 10 },
  { name: 'Page E', uv: 2500, pv: 4800, amt: 2181, time: 12 },
  { name: 'Page F', uv: 1220, pv: 3800, amt: 2500, time: 16 },
  { name: 'Page G', uv: 2300, pv: 4300, amt: 2100, time: 18 },
];
    return (
      <div>
        <Header/>
        <ChartTest data={data}/>
      </div>
    );
  }
}

export default App;
