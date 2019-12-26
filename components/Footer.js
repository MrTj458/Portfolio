import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  padding: 0.5rem 0;
  background-color: #2b2b2b;
  display: flex;

  li {
    display: inline;
    margin: 1rem;
  }

  a {
    font-size: 1.25rem;
    text-decoration: none;
    color: #fff;

    :hover {
      color: #aaa;
    }
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <ul>
        <li>
          <a href="https://github.com/MrTj458">Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/trevorhodsdon/">Linkedin</a>
        </li>
        <li>
          <a href="https://twitter.com/tjhod">Twitter</a>
        </li>
      </ul>
    </FooterContainer>
  )
}

export default Footer
