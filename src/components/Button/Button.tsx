import React, { FC } from 'react';
import styled from 'styled-components';
import { COLER } from '../../styles/color';

interface IButton {
    color?: string;
}

export const Button: FC<IButton> = ({ color }) => {
    const handleClick = () => {
        console.log('Click!');
    };

    return (
        <StyledButton color={color} onClick={handleClick}>
            Click!
        </StyledButton>
    );
};

const StyledButton = styled.button<IButton>`
    border-radius: 2px;
    background: ${({ color }) => color};
    color: ${COLER.RED};
`;
