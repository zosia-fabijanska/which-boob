import React from 'react';
import styled from 'styled-components';
import { white } from '../constants/colours';

const Title = styled.p`
    font-size: 24px;
    color: ${white};
    padding-top: 50px;
    margin-top: 0;
    text-align: center;
`;

class Header extends React.Component {
    render() {
        return (
            <Title>which buub?</Title>
        )
    }
};

export default Header;