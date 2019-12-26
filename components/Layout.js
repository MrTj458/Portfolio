import React from 'react'
import styled from 'styled-components'
import './styles.css'

import Nav from './Nav'
import Footer from './Footer'

const Container = styled.div`
  max-width: 960px;
  min-height: 100vh;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
