import React, { Component } from 'react';
import { 
  Header,
  RankList,
  ChartTest,
  TwoLevelPieChart
} from './components';
import * as api from './lib/api';
import './App.css';


class App extends Component {

  state = {
    loading: false,
    data: null,
    genre: null,
    rank: null,
  }

  getData = async () => {
    if (this.state.loading) return;
    
    this.setState({
      loading: true
    });
    
    try{
      const data_response = await api.getData();
      const genre_response = await api.getGenre();
      const rank_response = await api.getRank();
      
      const data = data_response.data;
      const genre = genre_response.data;
      const rank = rank_response.data;
      
      this.setState({
        data: data,
        genre: genre,
        rank: rank
      });
    
      console.log(data);
      console.log(genre);
    }catch(e){
      console.log(e);
    }
    
    this.setState({
      loading: false
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    const { data, loading, rank, genre } = this.state;
    
    return (
      <div>
        <Header/>
        <RankList data={ rank } loading={ loading }/>
        <ChartTest data={ data } loading={ loading }/>
        <TwoLevelPieChart genre={ genre } loading = { loading }/>
      </div>
    );
  }
}

export default App;
