import React, { Fragment } from 'react'
import styled from 'styled-components';

const Login = () => {
    return (
        <Fragment>
            <Container>
                <Content>
                    Login
                </Content>
            </Container>
        </Fragment>
    )
}

export default Login



//Componentes

const Container = styled.div`
    position:relative;
    height:calc(100vh - 70px);
    
    &:before{
        content:"";
        top:0;
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        background:url("/images/login-background.jpg") center center / cover no-repeat fixed;
    }
`

const Content = styled.div`

`