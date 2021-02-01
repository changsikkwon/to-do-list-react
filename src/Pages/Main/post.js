import React from 'react';
import styled from 'styled-components';

const Post = () => {
    return (
        <PostContainer>
            <PostBox>
                <ToDoBox></ToDoBox>
                <ToDoBox></ToDoBox>
            </PostBox>
            <PostBox></PostBox>
            <PostBox></PostBox>
            <PostBox></PostBox>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

const PostBox = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    padding-top: 40px;
    padding-bottom: 30px;
    background-color: rgb(219, 219, 219);
`;

const ToDoBox = styled.div`
    border-radius: 10px;
    width: 90%;
    min-height: 100px;
    background-color: white;
    margin-bottom: 10px;
`;

export default Post;
