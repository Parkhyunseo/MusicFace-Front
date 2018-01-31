import React, { Component } from 'react';
import {
  ChasingDots
} from 'better-react-spinkit';
import Rank from './Rank';

class RankList extends Component {
    render() {
        const { data, loading } = this.props;
        
        if(loading){
            <div className='Loading'>
                <ChasingDots color='white' size={60}/>
            </div>
        }
        
        const rankList = data.map(
            ({id, title}) => (
                <Rank
                    id={id}
                    title={title}
                />
            )
        );
    }
    
    return (
        <div>
            { rankList }
        </div>
    );
}

export default RankList;