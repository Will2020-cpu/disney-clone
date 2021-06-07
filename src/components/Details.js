import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../firebase';


const Details = () => {
    const { id } = useParams();
    const [movieData, setMovieData] = useState({});

    useEffect(() => {
        db.collection("movies")
            .doc(id)
            .get().then((doc) => {
                if (doc.exists) {
                    setMovieData(doc.data());
                } else {
                    console.log("No se encontraron datos de la pelicula en 🔥")
                }
            })
            .catch((error) => {
                console.log("Error intentado obtener la pelicula 😭", error)
            })
    }, [id])

    return (
        <Fragment>
            <Container>
                <Background>
                    <img src={movieData.fondo} alt={movieData.titulo} />
                </Background>
                <ImageTitle>
                    <img src={movieData.tituloImg} alt={movieData.titulo} />
                </ImageTitle>
                <Control>
                    <PlayButton>
                        <img src="/images/play-icon-black.png" alt="play"/>
                        <span>Play</span>
                    </PlayButton>
                    <TrailerButton>
                        <img src="/images/play-icon-white.png" alt="trailer"/>
                        <span>Trailer</span>
                    </TrailerButton>
                    <AddButton>
                        <span>+</span>
                    </AddButton>
                    <GroupButton>
                        <img src="/images/group-icon.png" alt="group"/>
                    </GroupButton>
                </Control>
                <SubTitle>
                    {movieData.subtitulo}
                </SubTitle>
                <Description>
                    {movieData.descripcion}
                </Description>
            </Container>
        </Fragment>
    )
}

export default Details


//Componentes
const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vh - 5px);
    position:relative;
`


const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    opacity:0.6;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const ImageTitle = styled.div`
    height:30vh;
    min-height:170px;
    width: 35vw;
    min-width:200px;
    margin-top:60px;

    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }   
`

const Control = styled.div`
    display:flex;
    align-items:center;
    margin:50px 0;
`

const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    padding : 0px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background:rgb(249,249,249);
    border: none;
    letter-spacing:1.8px;
    cursor:pointer;

    &:hover{
        background:rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border: 1px solid rgb(249,249,249);
    color: rgb(249,249,249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right:25px;
    width: 44px;
    height: 44px;
    display:flex;
    justify-content:center;
    border-radius:50%;
    border:2px solid #fff;
    align-items:center;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;

    span{
        font-size:30px;
        color:white;
    }
`

const GroupButton = styled(AddButton)`
    background : rgb(0,0,0);
    
`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`

const Description = styled.div`
    line-height:1.4;
    font-size:20px;
    margin-top:25px;
    color: rgb(249,249,249);
    max-width:760px;

`