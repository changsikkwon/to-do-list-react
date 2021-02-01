import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const SignIn = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const onChangeAccount = e => {
        setAccount(e.target.value);
    };

    const onChangePassword = e => {
        setPassword(e.target.value);
    };

    const history = useHistory();

    const clickLogin = () => {
        if (account.length > 3 && password.length > 8) {
            alert('로그인 성공!');
            history.push({ pathname: '/' });
        } else {
            alert('로그인 실패!');
        }
    };

    return (
        <LoginContainer>
            <LogoLoginBox>
                <LogoBox>
                    <LogoText>To Do List</LogoText>
                </LogoBox>
                <LoginBox>
                    <UserBox>
                        <InputUser name="account" value={account} onChange={onChangeAccount} placeholder="사용자" />
                    </UserBox>
                    <UserBox>
                        <InputUser name="password" value={password} onChange={onChangePassword} placeholder="비밀번호" />
                    </UserBox>
                    <LoginBtnBox>
                        <LoginBtn onClick={() => clickLogin()}>로그인</LoginBtn>
                    </LoginBtnBox>
                </LoginBox>
            </LogoLoginBox>
        </LoginContainer>
    );
};

const LoginContainer = styled.div`
    width: 100%;
    margin-top: 15%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const LogoLoginBox = styled.div`
    align-items: center;
    border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    display: flex;
    height: 380px;
`;

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
`;

const LogoText = styled.span`
    font-family: 'Carter One';
    font-size: 50px;
    font-weight: 700;
`;

const LoginBox = styled.div`
    margin-top: 60px;
    width: 350px;
    display: flex;
    flex-direction: column;
`;

const UserBox = styled.div`
    margin: 0 40px 15px;
    display: flex;
    align-items: center;
    border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    border-radius: 5px;
    height: 38px;
    width: 270px;
`;

const InputUser = styled.input`
    font-size: 12px;
    background: rgba(var(--b3f, 250, 250, 250), 1);
    border: 0;
    padding: 9px 0 7px 8px;
    text-overflow: ellipsis;
    height: 36px;
`;

const LoginBtnBox = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 8px;
    justify-content: center;
    align-content: stretch;
    display: flex;
    position: relative;
    justify-content: center;
    width: 270px;
    border: 1px solid transparent;
`;

const LoginBtn = styled.button`
    background-color: rgba(var(--d69, 0, 149, 246), 0.3);
    border-radius: 4px;
    text-align: center;
    margin-top: 10px;
    width: 270px;
    height: 35px;
    font-size: 15px;
    text-rendering: auto;
    color: rgba(var(--eca, 255, 255, 255), 1);
`;

export default SignIn;