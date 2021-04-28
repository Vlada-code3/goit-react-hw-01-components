import React from 'react'
import StatisticsItems from './statisticsItem/StatisticsItems';
import PropTypes from 'prop-types';
import { StatisticStyled } from './StatisticStyled';
const Statistics = ({title, stats}) => {
    return (
        <StatisticStyled>
        <div className="container">
            <h2 className="title" >{title || "no title"} </h2>

            <ul className="stat-list">
                {stats.map(stat=>(
                    <StatisticsItems stat={stat} key={stat.id}/>
                ))}
            </ul>
            </div>
        </StatisticStyled>
    );
}


Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title:PropTypes.string,
};

export default Statistics;