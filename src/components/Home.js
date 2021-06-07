import React, { Fragment, useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewer from './Viewer'
import Movies from './Movies'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movies/movieSlice'



const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            })
            dispatch(
                setMovies(tempMovies)
            )
        })
    }, [dispatch])

    return (
        <Fragment>
            <Container>
                <ImageSlider />
                <Viewer />
                <Movies />
            </Container>
        </Fragment>
    )
}

export default Home


//Componentes
const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    position: relative;
    overflow-x: hidden;

    &:before{
        content:"";
        background : url("/images/home-background.png") center center / cover no-repeat fixed;
        position:absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
    }
`