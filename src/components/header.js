import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName, selectUserEmail, selectUserPicture, setUser, setUserRemove } from '../features/user/userSlice'
import { auth, provider } from '../firebase'
import { useHistory } from 'react-router-dom'

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPicture = useSelector(selectUserPicture)

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUserDetails(user);
                history.push('/home');
            }
        })
    }, [userName]);

    const handleAuth = () => {
        if (!userName) {
            auth.signInWithPopup(provider).then((result) => {
                console.log(result)
                setUser(result)
            })
                .catch((error) => {
                    alert(error.message);
                })
        } else if (userName) {
            auth.signOut().then(() => {
                dispatch(setUserRemove());
                history.push('/')
            })
                .catch((error) => alert(error.message))
        }
    }

    const setUserDetails = (user) => {
        dispatch(
            setUser({
                name: user.displayName,
                email: user.email,
                picture: user.photoURL
            })
        )
    }

    return (
        <Fragment>
            <Nav>
                <Logo src="/images/logo.svg" />
                {!userName ? (
                    <Login onClick={handleAuth}>login</Login>
                ) : (
                    <Fragment>
                        <NavMenu>
                            <a href="/">
                                <img src="/images/home-icon.svg" alt="home-icon" />
                                <span>INICIO</span>
                            </a>
                            <a href="/">
                                <img src="/images/search-icon.svg" alt="search-icon" />
                                <span>BUSCAR</span>
                            </a>
                            <a href="/">
                                <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
                                <span>AGREGAR LISTA</span>
                            </a>
                            <a href="/">
                                <img src="/images/original-icon.svg" alt="original-icon" />
                                <span>ORIGINALES</span>
                            </a>
                            <a href="/">
                                <img src="/images/movie-icon.svg" alt="movie-icon" />
                                <span>PELICULAS</span>
                            </a>
                            <a href="/">
                                <img src="/images/series-icon.svg" alt="serios-icon" />
                                <span>SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserImg src={userPicture} alt="profile" />
                            <DropDown>
                                <span onClick={handleAuth}>Salir</span>
                            </DropDown>
                        </SignOut>


                    </Fragment>
                )}
            </Nav>
        </Fragment>
    )
}

export default Header;


//Componentes
const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`

const Logo = styled.img`
    width:80px;
`
const NavMenu = styled.div`
    display:flex;
    margin-right: 25px;
    align-items:center;
    justify-content:flex-end;


    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
        color:#fff;
        text-decoration:none;
        
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
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;