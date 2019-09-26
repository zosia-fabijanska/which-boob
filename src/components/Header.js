import React from 'react';
import styled from 'styled-components';

const Title = styled.p`
    font-size: 24px;
    color: #ffffff;
    padding-top: 50px;
    margin-top: 0;
    text-align: center;
`;

class Header extends React.Component { 
    render() {
        return (
            <Title>Which Buub?</Title>
        )
    }
};

export default Header;