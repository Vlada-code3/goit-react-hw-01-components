import styled from 'styled-components';

export const ProfileStyledContainerMain = styled.div`

background-color: #d2eff7;
padding:30px;

.description{
    background-color: gainsboro;
margin: 0 auto;
width: 50%;

display:flex;
flex-direction: column;
align-items: center;
}
.avatar{
    margin-top:20px;
    width: 50%;
    border-radius:50%;
    margin-bottom:20px;
    
}
.name{
    font-weight:700;
}
.tag{
    color: #3d3c3c;
}


`
export const ProfileStyledContainerList= styled.ul`

list-style:none;
display:flex;
margin:0;
padding:0;
width:100%;


.info{
    border: 1px solid #928e8e;
    height:50px;
    width:100%;
    align-items:center;
    background-color: #d2efc3;
    display:flex;
    flex-direction:column;
}
.quantity{
    font-weight:700;
}

`


