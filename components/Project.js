import React from 'react'
import styled from 'styled-components'

const Project = ({ name, image, github, link, desc }) => {
  return (
    <ProjectStyles>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <div>
        <a href={github}>
          <i className="fab fa-github fa-2x"></i>
          <small>View Repo</small>
        </a>
        {link !== 'nohost' && (
          <a href={link}>
            <i className="fas fa-eye fa-2x"></i>
            <small>Visit Site</small>
          </a>
        )}
      </div>
      <p>{desc}</p>
    </ProjectStyles>
  )
}

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
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  h2 {
    margin-bottom: 0.5rem;
  }

  img {
    width: 350px;
    border-radius: 5px;
    border: 1px solid #2b2b2b;
    margin: 0 auto;
  }

  a {
    margin: 1rem 1rem;
    color: #fff;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;

    :hover {
      color: #eece1a;
    }

    i {
      transition: 0.5s;
    }

    i:hover {
      transform: rotate(-20deg);
      animation: wiggle 1s 0.5s infinite;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(-20deg);
    }
  }

  @keyframes wiggle {
    0% {
      transform: rotate(-20deg);
    }

    50% {
      transform: rotate(20deg);
    }

    100% {
      transform: rotate(-20deg);
    }
  }
`

export default Project
