import React from 'react';
import Statistics from './Statistics';


const StatisticList = () => {
    return (
        <ul>
            {statistics.map((statistic)=>
            <Statistics
            )}
        </ul>
    );
}

export default StatisticList;