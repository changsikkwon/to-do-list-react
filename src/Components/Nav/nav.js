import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavContainer>
            <EmptyBox />
            <NavCenterBox>
                <NavCenterText>To Do List</NavCenterText>
            </NavCenterBox>
            <NavRightBox>
                <SignUpBox>회원가입</SignUpBox>
                <span>로그인</span>
            </NavRightBox>
        </NavContainer>
    );
};

const NavContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    border-bottom: 1px solid rgb(219, 219, 219);
    margin-bottom: 50px;
`;

const EmptyBox = styled.div`
    width: 200px;
    height: 100%;
`;

const NavCenterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 100%;
`;

const NavCenterText = styled.span`
    font-family: 'Carter One';
    font-size: 50px;
    font-weight: 700;
`;

const NavRightBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 100%;
    padding-top: 35px;
`;

const SignUpBox = styled.span`
    margin-right: 15px;
`;

export default Nav;
