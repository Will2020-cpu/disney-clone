import React, { Fragment } from 'react'
import styled from 'styled-components'

const header = () => {
    return (
        <Fragment>
            <Nav>
                <Logo src="/images/logo.svg"/>
            </Nav>
        </Fragment>
    )
}

export default header


//Componentes
const Nav = styled.div`
    height:70px;
    background: #090b13;
`

const Logo = styled.img`
    width:80px;
`
const NavMenu = styled
