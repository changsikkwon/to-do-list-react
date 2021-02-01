import React from 'react';
import styled from 'styled-components';
import Nav from '../../Components/Nav/nav';

const Main = () => {
    return (
        <Wrapper>
            <Nav />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export default Main;
