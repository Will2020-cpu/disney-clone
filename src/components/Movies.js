import React, { Fragment } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectMovies } from '../features/movies/movieSlice'
import { Link } from 'react-router-dom'

const Movies = () => {
    const movies = useSelector(selectMovies)
    const Recomendado = movies.filter(item => item.type === "recomendado")
    const New = movies.filter(item => item.type === "new")
    const Originales = movies.filter(item => item.type === "original")

    return (
        <Fragment>
            <Container>
                <Title>Recomendado para ti!</Title>
                <Content>
                    {
                        Recomendado.map(item => (
                            <Wrap key={item.id}>
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.cardImg} alt={item.titulo} />
                                </Link>
                            </Wrap>
                        ))
                    }
                </Content>
                <Title>Contenido nuevo <span>👽</span></Title>
                <Content>
                    {
                        New.map(item => (
                            <Wrap key={item.id}>
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.cardImg} alt={item.titulo} />
                                </Link>
                            </Wrap>
                        ))
                    }
                </Content>
                <Title>Originales</Title>
                <Content>
                    {
                        Originales.map(item => (
                            <Wrap>
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.cardImg} alt={item.titulo} />
                                </Link>
                            </Wrap>
                        ))
                    }
                </Content>
            </Container>
        </Fragment>
    )
}

export default Movies

//Componentes
const Container = styled.div`

`

const Title = styled.h4`
    margin-top:60px;
`


const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`


const Wrap = styled.div`
    border-radius:10px;
    overflow:hidden;
    border:3px solid rgba(249,249,249,0.1);
    box-shadow : rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
    cursor:pointer;
    position:relative;
    padding-top: 56.25%;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        position:absolute;
        display:block;
        inset:0px;
        opacity:1;
        top:0;
        z-index:1;
        transition: opacity 500ms ease-in-out 0s;
    }

    &:hover{
        box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color: rgba(249,249,249,0.8);
    }
`