import React from 'react'


import TransactionHistoryItems from './TransactionHistoryItems';
import { TransactionStyled } from './TransactionStyled';

const TransactionHistory = ({items}) => {
    return (
        
        <TransactionStyled>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>

                {items.map(item => (
                  <TransactionHistoryItems item={item} key={item.id}/>
                ))}
            
            </tbody>
        </TransactionStyled>
        
    );
}




export default TransactionHistory;