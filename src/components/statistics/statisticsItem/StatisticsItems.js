import React from 'react'
import { StatisticsItemsStyled } from '../StatisticLiStyled';
import PropTypes from 'prop-types';
const StatisticsItems = ({stat}) => {
    return (
        <StatisticsItemsStyled>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
        </StatisticsItemsStyled>
    );
}
StatisticsItems.propTypes = {
    stat: PropTypes.shape({
      label: PropTypes.string,
      percentage:PropTypes.number,
    }).isRequired
};



export default StatisticsItems;