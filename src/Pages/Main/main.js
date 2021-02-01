import React from 'react';
import styled from 'styled-components';
import Nav from '../../Components/Nav/nav';
import Post from './post';

const Main = () => {
    return (
        <Wrapper>
            <Nav />
            <Post />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export default Main;
