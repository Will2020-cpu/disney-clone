import React, { Fragment } from 'react'
import styled from 'styled-components'

const header = () => {
    return (
        <Fragment>
            <Nav>
                <Logo src="/images/logo.svg" />
                <NavMenu>
                    <a>
                        <img src="/images/home-icon.svg" />
                        <span>INICIO</span>
                    </a>
                    <a>
                        <img src="/images/search-icon.svg" />
                        <span>BUSCAR</span>
                    </a>
                    <a>
                        <img src="/images/watchlist-icon.svg" />
                        <span>AGREGAR LISTA</span>
                    </a>
                    <a>
                        <img src="/images/original-icon.svg" />
                        <span>ORIGINALES</span>
                    </a>
                    <a>
                        <img src="/images/movie-icon.svg" />
                        <span>PELICULAS</span>
                    </a>
                    <a>
                        <img src="/images/series-icon.svg" />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImg src="https://lh3.googleusercontent.com/ogw/ADGmqu_m4zbBsYwjAsKjC4yD6gZludTC8dC7ZDaepCmTKA=s32-c-mo" alt="profile"/>
            </Nav>
        </Fragment>
    )
}

export default header


//Componentes
const Nav = styled.div`
    height:70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding: 0 36px;
`

const Logo = styled.img`
    width:80px;
`
const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-right: 25px;
    align-items:center;


    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        
        img{
            height:20px;
        }
        span{
            font-size:12px;
            letter-spacing:1.42px;
            position:relative;


            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform: scaleX(0);
                transition:all 250ms cubic-bezier(0.25,0.45,0.45,0.94) 0s;
            }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1
            }
        }
    }
`

const UserImg = styled.img`
    max-width:48px;
    max-height:48px;
    border-radius: 50%;
    object-fit:cover;
    width:auto;
    height:auto;
    cursor:pointer;
`