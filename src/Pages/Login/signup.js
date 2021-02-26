import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { CREATE_USER } from '../../Query';

const SignUp = () => {
    const [user, setUser] = useState({
        account: '',
        password: '',
    });
    const [rePassword, setRePassword] = useState('');
    const [activeText, setActiveText] = useState([]);

    const { account, password } = user;

    const onChangeUser = e => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const onChangeRePassword = e => {
        setRePassword(e.target.value);
    };

    const history = useHistory();

    const activeCheck = e => {
        setActiveText([...activeText, e.target.name]);
    };

    const [createUser] = useMutation(CREATE_USER);

    console.log(user);
    const handleClick = () => {
        createUser({ variables: user })
            .then(res => {
                alert('회원가입 성공!');
                history.push({ pathname: '/' });
            })
            .catch(err => {
                alert(err.message);
            });
    };

    return (
        <SignUpContainer>
            <LogoSignUpBox>
                <LogoBox>
                    <span>To Do List</span>
                </LogoBox>
                <SignUpBox>
                    <IdFail activeText={activeText} account={account}>
                        아이디는 4자 이상 입력해 주세요.
                    </IdFail>
                    <IdSuccess activeText={activeText} account={account}>
                        등록 가능한 아이디 입니다.
                    </IdSuccess>
                    <UserBox>
                        <InputUser
                            type="text"
                            name="account"
                            value={account}
                            onChange={onChangeUser}
                            onFocus={e => activeCheck(e)}
                            placeholder="아이디는 4자 이상 입력 해주세요."
                        />
                    </UserBox>
                    <PasswordFail activeText={activeText} password={password}>
                        사용 할 수 없는 비밀번호 입니다.
                    </PasswordFail>
                    <PasswordSuccess activeText={activeText} password={password}>
                        사용 가능한 비밀번호 입니다.
                    </PasswordSuccess>
                    <UserBox>
                        <InputUser
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChangeUser}
                            onFocus={e => activeCheck(e)}
                            placeholder="비밀번호는 6자 이상 입력 해주세요."
                        />
                    </UserBox>
                    <PasswordMatchFail activeText={activeText} password={password} rePassword={rePassword}>
                        비밀번호가 일치하지 않습니다.
                    </PasswordMatchFail>
                    <PasswordMatchSuccess activeText={activeText} password={password} rePassword={rePassword}>
                        비밀번호가 일치합니다.
                    </PasswordMatchSuccess>
                    <UserBox>
                        <InputUser
                            type="password"
                            name="rePassword"
                            value={rePassword}
                            onChange={onChangeRePassword}
                            onFocus={e => activeCheck(e)}
                            placeholder="비밀번호를 재입력 해주세요."
                        />
                    </UserBox>
                    <SignUpBtnBox>
                        <SignUpBtn onClick={() => handleClick()}>가입하기</SignUpBtn>
                    </SignUpBtnBox>
                </SignUpBox>
            </LogoSignUpBox>
        </SignUpContainer>
    );
};

const SignUpContainer = styled.div`
    width: 100%;
    margin-top: 13%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

const LogoSignUpBox = styled.div`
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
    font-family: 'Carter One';
    font-size: 50px;
    font-weight: 700;
    span {
        cursor: default;
    }
`;

const SignUpBox = styled.div`
    margin-top: 40px;
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
`;

const InputUser = styled.input`
    width: 270px;
    height: 40px;
    font-size: 12px;
    background: rgba(var(--b3f, 250, 250, 250), 1);
    border: 0;
    padding: 9px 0 7px 8px;
`;

const SignUpBtnBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

const SignUpBtn = styled.button`
    font-weight: 600;
    font-size: 18px;
`;

const InputCheck = styled.div`
    position: relative;
    font-size: 13px;
    display: flex;
    justify-content: flex-start;
    margin-left: 40px;
    margin-top: -4px;
    margin-bottom: 7px;
`;

const IdFail = styled(InputCheck)`
    display: ${props => (props.activeText.includes('account') && props.account.length < 4 ? 'relative' : 'none')};
    color: #ff0000;
`;

const IdSuccess = styled(InputCheck)`
    display: ${props => (props.activeText.includes('account') && props.account.length > 3 ? 'relative' : 'none')};
    color: #0da94a;
`;

const PasswordFail = styled(InputCheck)`
    display: ${props => (props.activeText.includes('password') && props.password.length < 6 ? 'relative' : 'none')};
    color: #ff0000;
`;

const PasswordSuccess = styled(InputCheck)`
    display: ${props => (props.activeText.includes('password') && props.password.length > 5 ? 'relative' : 'none')};
    color: #0da94a;
`;

const PasswordMatchFail = styled(InputCheck)`
    display: ${props => (props.activeText.includes('rePassword') && props.password !== props.rePassword ? 'relative' : 'none')};
    color: #ff0000;
`;

const PasswordMatchSuccess = styled(InputCheck)`
    display: ${props => (props.activeText.includes('rePassword') && props.password === props.rePassword ? 'relative' : 'none')};
    color: #0da94a;
`;

export default SignUp;
