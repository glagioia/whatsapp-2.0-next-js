import Head from 'next/head';
import Image from 'next/image';
import styled from "styled-components";
import { Button } from '@material-ui/core';
import GoogleIcon from '@material-ui/icons/Google';
import { auth, provider } from '../firebase';
import { signInWithPopup } from '@firebase/auth';


const Login = () => {
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider);
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <Loginn>
                <Image src="/whatsicon.png" height={100} width={100} />
                <Button style={{ color: "gray" }} startIcon={<GoogleIcon />}
                    onClick={loginWithGoogle}>
                        Login with Google</Button>
            </Loginn>

        </Container>
    )


}

export default Login;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #5b2cd2;
    width: 100vw;
`;



const Loginn = styled.div`
    padding: 30px;
    display: flex;
    gap: 20px;
    background-color: white;
    border-radius: 15px;
`;

const Logo = styled.img``;