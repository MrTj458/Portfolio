import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Project from '../components/Project'
import LinkButton from '../components/LinkButton'

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | Trevor Hodsdon</title>
      </Head>

      <ProjectsStyles>
        <h1>
          My <span>Projects</span>
        </h1>
        <ProjectsList>
          <Project
            name="Instaclone"
            image="/images/projects/Instaclone.png"
            github="https://github.com/MrTj458/InstaClone"
            link="nohost"
            desc="This is my current in progress project that I am working on in between school semesters. It is a clone of Instagram's web app. I am using this project to really practice my CSS skills as styling is my weakest point. It also uses the Redux-Toolkit recently released by the Redux.js team since I wanted to try it out."
          />
          <Project
            name="Forum"
            image="/images/projects/Forum.png"
            github="https://github.com/MrTj458/drf-next-forum"
            link="nohost"
            desc="A forum application made with Next.js and Django Rest Framework. I have no plans for people using this application and mostly used it to learn the Django Rest Framework basics, but I am happy with how it turned out."
          />
          <Project
            name="School of Rock Foundation"
            image="/images/projects/sorfoundation.png"
            github="https://github.com/MrTj458/SorFoundationSite"
            link="https://sorfoundation.herokuapp.com/"
            desc="I built a Django website for the School of Rock Foundation. It has a full admin page that the foundation managers can use to update sponsors, recipients, gallery images, as well as post about upcoming events. It was built entirely in Django."
          />
          <Project
            name="Hooks News"
            image="/images/projects/hooks-news.png"
            github="https://github.com/MrTj458/react-hooks-news"
            link="https://hooks-news-a15e1.firebaseapp.com/new/1"
            desc="This is a simplified clone of Hacker news. I used this project to learn the ins and out of React Hooks which I have been using ever since as they are way nicer than class components in my opinion. It uses Firebase as the back-end."
          />
          <Project
            name="Firebase todos"
            image="/images/projects/r&fTodos.png"
            github="https://github.com/MrTj458/react-firebase-todos"
            link="https://super-simple-todos.netlify.com/"
            desc="A very simple todo app made with React and Firebase. This was my first project with Firebase."
          />
        </ProjectsList>
        <LinkButton>
          <a href="https://github.com/MrTj458/">
            Check out more projects on my Github profile!
          </a>
        </LinkButton>
      </ProjectsStyles>
    </>
  )
}

const ProjectsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  span {
    color: #eece1a;
  }
`

const ProjectsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default Projects
