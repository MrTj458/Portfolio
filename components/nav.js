import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NavBar = styled.div`
  padding: 0.5rem 0;
  background-color: #2b2b2b;
  margin-bottom: 1rem;
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

const Nav = () => {
  return (
    <NavBar>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </NavBar>
  )
}

export default Nav
