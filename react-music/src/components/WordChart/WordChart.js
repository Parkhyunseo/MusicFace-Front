import React from 'react';
import ReactWordCloud from 'react-wordcloud';

const WORD_COUNT_KEY = 'word';
const WORD_KEY = 'value';

const WordChart = ({data, loading}) => {
    return (
        <div style={{width: 600, height: 400}}>
            <ReactWordCloud
                words={data}
                wordCountKey={WORD_COUNT_KEY}
                wordKey={WORD_KEY}
                />
        </div>
    )
}

export default WordChart;