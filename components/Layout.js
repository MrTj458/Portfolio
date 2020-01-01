import styled from 'styled-components'

import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => (
  <>
    <NavBar />
    <Container>{children}</Container>
    <Footer />
  </>
)

const Container = styled.div`
  max-width: 960px;
  min-height: 100vh;
  margin: 0 auto;
`

export default Layout
