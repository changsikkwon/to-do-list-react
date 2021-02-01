import React, { useState } from 'react';
import styled from 'styled-components';

function Post() {
    return (
        <PostContainer>
            <PostBox>
                <PostNameBox>
                    <input name="box1" defaultValue="Back Log" />
                    Back Log
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
                    <input name="box2" defaultValue="To Do List" />
                    To Do List
                </PostNameBox>
                <ToDoBox></ToDoBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <PostNameBox>
                    <input name="box3" defaultValue="In Progress" />
                    In Progress
                </PostNameBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <PostNameBox>
                    <input name="box4" defaultValue="Done" />
                    Done
                </PostNameBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
        </PostContainer>
    );
}

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
    height: fit-content;
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
    visibility: visible;
    input {
        visibility: hidden;
    }
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
