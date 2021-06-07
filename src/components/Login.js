import React, { Fragment } from 'react'
import styled from 'styled-components';

const Login = () => {
    return (
        <Fragment>
            <Container>
                <Content>
                    <ContentLogoOne src="/images/cta-logo-one.svg"/>
                    <GetButton>
                        Obtener Todos <span>👽</span>
                    </GetButton>
                <Description>
                    Obten disney clone y podras acceder a todos las Peliculas 🤑 y ser el que mas presume 👾
                </Description>
                <ContentLogoTwo src="/images/cta-logo-two.png"/>
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
    display:flex;
    align-items:top;
    justify-content:center;

    &:before{
        content:"";
        top:0;
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        background:url("/images/login-background.jpg") center center / cover no-repeat fixed;
        opacity:0.7;
        z-index:-1;
    }
`

const Content = styled.div`
    max-width:650px;
    padding:80px 40px;
    width: 80%;
    display:flex;
    align-items:center;
    flex-direction:column;
`

const ContentLogoOne = styled.img`

`

const GetButton = styled.a`
    width:100%;
    background-color:#0064e5;
    font-weight:bold;
    text-transform:uppercase;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:10px;

    &:hover{
        background:#0483ee;
    }
`

const Description = styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`
const ContentLogoTwo = styled(ContentLogoOne)`
    width:90%;
`