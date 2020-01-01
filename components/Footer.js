import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <FooterContainer>
    <ul>
      <li>
        <a href="https://github.com/MrTj458">
          <i className="fab fa-github-square fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/trevorhodsdon/">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/tjhod">
          <i className="fab fa-twitter-square fa-2x"></i>
        </a>
      </li>
    </ul>
  </FooterContainer>
)

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
      color: #eece1a;
    }
  }
`

export default Footer
