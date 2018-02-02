import React, { Component } from 'react';
import {
  ChasingDots
} from 'better-react-spinkit';
import Rank from '../Rank/Rank';

class RankList extends Component {

    // 컴포넌트가 리렌더링을 할 지 말지 정해준다.
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }
    
    render() {
        const { data, loading } = this.props;
        
        /*if(loading){
            <div className='Loading'>
                <ChasingDots color='white' size={60}/>
            </div>
            return;
        }*/
        
        console.log(data);
        
        if(!loading){
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
                { loading ? <ChasingDots color='white' size={60}/> : rankList}
            </div>
        );
    }
}

export default RankList;