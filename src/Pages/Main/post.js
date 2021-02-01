import React from 'react';
import styled from 'styled-components';

const Post = () => {
    return (
        <PostContainer>
            <PostBox>
                <PostNameBox>
                    <span>Back Log</span>
                </PostNameBox>
                <ToDoBox></ToDoBox>
                <ToDoBox></ToDoBox>
                <ToDoBox></ToDoBox>
                <ToDoBox></ToDoBox>
                <ToDoBox></ToDoBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <PostNameBox>
                    <span>To Do List</span>
                </PostNameBox>
                <ToDoBox></ToDoBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <PostNameBox>
                    <span>In Progress</span>
                </PostNameBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <PostNameBox>
                    <span>Done</span>
                </PostNameBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
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
    background-color: rgb(219, 219, 219);
`;

const PostNameBox = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 800;
    font-size: 18px;
`;
const ToDoBox = styled.button`
    border-radius: 10px;
    width: 90%;
    height: 100px;
    background-color: white;
    margin-bottom: 10px;
`;

const AddBox = styled.div`
    width: 83%;
`;

const AddBtn = styled.button`
    width: 100%;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    color: gray;
    display: flex;
    justify-content: flex-start;
`;

export default Post;
