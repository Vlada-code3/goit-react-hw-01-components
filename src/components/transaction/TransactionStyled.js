import styled from 'styled-components';

export const TransactionStyled= styled.table`

border: 1px solid grey;
width:100%;
margin:0 auto;
border-collapse: collapse;

 th, td {
  border: 1px solid black;
   padding: 0.5rem;
  text-align: center;
}


thead{
    background-color: #00FFFF;

}

tr:nth-child(even) {
  background: red;
}



`