import React, { useState } from 'react';
import styled from 'styled-components';

function Post() {
    const [inputs, setInputs] = useState({
        box1: 'Back Log',
        box2: 'To Do List',
        box3: 'In Progress',
        box4: 'Done',
    });

    const [click, setClick] = useState({
        click1: true,
        click2: true,
        click3: true,
        click4: true,
    });

    const { box1, box2, box3, box4 } = inputs;

    const { click1, click2, click3, click4 } = click;

    const enterKey = e => {
        if (e.keyCode == 13) {
            const { title } = e.target;
            click[title] = true;
            setClick({
                ...click,
            });
        } else {
            setClick(click);
        }
    };

    const onChange = e => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onClick = e => {
        const { name } = e.target;
        setClick({
            ...click,
            [name]: !click,
        });
    };

    return (
        <PostContainer>
            <PostBox>
                <Clicked name="click1" onClick={onClick} click={click1}>
                    {box1}
                </Clicked>
                <UnClicked onKeyUp={enterKey} title="click1" name="box1" value={box1} onChange={onChange} click={click1} />
                <ToDoBox></ToDoBox>
                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <Clicked name="click2" onClick={onClick} click={click2}>
                    {box2}
                </Clicked>
                <UnClicked onKeyUp={enterKey} title="click2" name="box2" value={box2} onChange={onChange} click={click2} />

                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <Clicked name="click3" onClick={onClick} click={click3}>
                    {box3}
                </Clicked>
                <UnClicked onKeyUp={enterKey} title="click3" name="box3" value={box3} onChange={onChange} click={click3} />

                <AddBox>
                    <AddBtn>➕ 추가하기</AddBtn>
                </AddBox>
            </PostBox>
            <PostBox>
                <Clicked name="click4" onClick={onClick} click={click4}>
                    {box4}
                </Clicked>
                <UnClicked onKeyUp={enterKey} title="click4" name="box4" value={box4} onChange={onChange} click={click4} />

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
    background-color: rgb(230, 230, 230);
`;

const PostNameBox = styled.button`
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: 800;
    font-size: 18px;
`;

const Clicked = styled(PostNameBox)`
    display: ${props => (props.click ? 'flex' : 'none')};
`;

const PostName = styled.input`
    width: 77.8%;
    height: 50px;
    display: none;
    justify-content: flex-start;
    align-items: center;
    font-weight: 500;
    font-size: 18px;
    background-color: rgb(230, 230, 230);
    border: none;
    color: gray;
`;

const UnClicked = styled(PostName)`
    display: ${props => (props.click ? 'none' : 'flex')};
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
