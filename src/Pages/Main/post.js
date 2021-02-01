import React, { useState } from 'react';
import styled from 'styled-components';

function Post() {
    const [inputs, setInputs] = useState({
        box1: 'Back Log',
        box2: 'To Do List',
        box3: 'In Progress',
        box4: 'Done',
    });
    console.log(inputs);

    const { box1, box2, box3, box4 } = inputs;

    const onChange = e => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    return (
        <PostContainer>
            <PostBox>
                <PostNameBox>
                    <input name="box1" value={box1} onChange={onChange} />
                    {box1}
                </PostNameBox>
                <ToDoBox></ToDoBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <PostNameBox>
                    <input name="box2" value={box2} onChange={onChange} />
                    {box2}
                </PostNameBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <PostNameBox>
                    <input name="box3" value={box3} onChange={onChange} />
                    {box3}
                </PostNameBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <PostNameBox>
                    <input name="box4" value={box4} onChange={onChange} />
                    {box4}
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

const PostNameBox = styled.button`
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 800;
    font-size: 18px;
    visibility: visible;
    input {
        visibility: visible;
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
