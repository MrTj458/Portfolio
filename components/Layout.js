import styled from 'styled-components'

import NavBar from './NavBar'
import Footer from './Footer'

const Container = styled.div`
  max-width: 960px;
  min-height: 100vh;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
