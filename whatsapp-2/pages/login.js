import Head from 'next/head';
import styled from "styled-components";
import { Button } from '@material-ui/core';

function Login(){
    return(
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo src="./logo.png"/>
                <Button variant="outlined">Sign in with Google</Button>
            </LoginContainer>

        </Container>
    )

    
}

export default Login;

const Container = styled.div`

`;	

const LoginContainer = styled.div`
`;


const Logo = styled.img``;