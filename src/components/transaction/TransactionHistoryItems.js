import React from 'react'
import PropTypes from 'prop-types';
const TransactionHistoryItems = ({item}) => {
    return (
       

            // <tbody>
                
            //         {items.map(item=>(
            //             <tr key={item.id}>
            //                 <td>{item.type}</td>
            //                 <td>{item.amount}</td>
            //                 <td>{item.currency}</td>
            //             </tr>
            //         ))}
             
            // </tbody>

            <tr >
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
      

    );
}

TransactionHistoryItems.propTypes = {
    item: PropTypes.arrayOf({
    type:PropTypes.string,
    amount: PropTypes.number,
    currency:PropTypes.string , 
        }).isRequired
   
};

export default TransactionHistoryItems;