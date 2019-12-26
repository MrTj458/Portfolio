import React from 'react'
import styled from 'styled-components'

const ProjectStyles = styled.div`
  background: #515151;
  padding: 0.5rem;
  border: 1px solid black;
  border-bottom: solid 5px #eece1a;
  border-radius: 5px;
  width: 400px;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-bottom: 0.5rem;
  }

  img {
    width: 350px;
    border-radius: 5px;
    border: 1px solid #2b2b2b;
    margin: 0 auto;
  }

  ul {
    margin: 0.5rem 0;
    list-style: none;
  }

  li {
    display: inline;
  }

  a {
    margin: 0 1rem;
    color: #fff;
  }
`

const Project = ({ name, image, github, link, desc }) => {
  return (
    <ProjectStyles>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <ul>
        <li>
          <a href={github}>Github</a>
        </li>
        <li>
          <a href={link}>Visit Site</a>
        </li>
      </ul>
      <p>{desc}</p>
    </ProjectStyles>
  )
}

export default Project
