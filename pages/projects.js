import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Project from '../components/Project'

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
            name="Forum"
            image="/images/projects/r&fTodos.png"
            github="https://github.com/MrTj458/drf-next-forum"
            link="https://forum.mrtj458.net/"
            desc="A forum application made with Next.js and Django Rest Framework. I have no plans for people using this application and mostly used it to learn the Django Rest Framework basics."
          />
          <Project
            name="School of Rock Foundation"
            image="/images/projects/sorfoundation.png"
            github="https://github.com/MrTj458/SorFoundationSite"
            link="https://sorfoundation.herokuapp.com/"
            desc="I built a Django website for the School of Rock Foundation. It has a full admin page that the foundation managers can use to update sponsors, recipients, gallery images, as well as post about upcoming events."
          />
          <Project
            name="Hooks News"
            image="/images/projects/hooks-news.png"
            github="https://github.com/MrTj458/react-hooks-news"
            link="https://hooks-news-a15e1.firebaseapp.com/new/1"
            desc="This site is build with React hooks as well a Firebase. It is a simplified clone of Hacker news."
          />
          <Project
            name="Last Minute Take Out"
            image="/images/projects/lmto.png"
            github="https://github.com/MrTj458/LastMinuteTakeOutSite"
            link="https://lastminutetakeout.com/"
            desc="This is a static site made with Bootstrap for my sisters band."
          />
          <Project
            name="Firebase todos"
            image="/images/projects/r&fTodos.png"
            github="https://github.com/MrTj458/react-firebase-todos"
            link="https://super-simple-todos.netlify.com/"
            desc="A very simple todo app made with React and Firebase."
          />
        </ProjectsList>
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
