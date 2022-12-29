import styled from 'styled-components'

export const DivSearchIcon = styled.div`
    height: 60px;
    width: 50px;
    display: grid;

    background-color: ${props => props.hasFocus ? "#10334C" : "#67717E"};

    border: 3px solid ${props => props.hasFocus ? "#175582" : "#9BA4B0"};
    border-left: 0;

    place-items: center;
`;