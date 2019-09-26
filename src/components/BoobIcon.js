import React from 'react';
import styled from 'styled-components';
import breastIcon from '../assets/breastWhite.svg';

const BoobIconImg = styled.img`
    max-width: 64px;
`;

class BoobIcon extends React.Component { 
    render() {
        return (
            <BoobIconImg src={breastIcon} alt='icon of breast'/>
        )
    }
};

export default BoobIcon;