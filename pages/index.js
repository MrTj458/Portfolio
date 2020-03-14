import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

import Job from '../components/Job'
import LinkButton from '../components/LinkButton'

const Home = () => (
  <>
    <Head>
      <title>Home | Trevor Hodsdon</title>
    </Head>

    <HomeStyles>
      <img src="/images/Me.JPG" alt="" />
      <h1>
        Trevor <span>Hodsdon</span>
      </h1>
      <h2>Full Stack Web Developer</h2>
      <h2>mrtj458@gmail.com</h2>
      <h3>
        Hello! I am a student at Salt Lake Community College that loves to build
        full-stack websites!
      </h3>
      <h2>My Past Jobs</h2>
      <Jobs>
        <Job
          title="DevPoint Labs"
          position="Full-stack Web Developer"
          description="DevPoint Labs is a full-stack web development boot-camp partnered
      with the University of Utah. Here I learned the basics of React as
      well as Ruby on Rails and PostgreSQL. Here I got a full-stack
      certification from the University of Utah."
        />
        <Job
          title="University of Utah"
          position="Computer Science Student"
          description="I was a student at the University of Utah majoring in Computer
            Science for one year before going to DevPoint Labs."
        />
        <Job
          title="CTEC"
          position="Computer Science Student"
          description="Canyons Technical Education Center is a tech school that I went to alongside high school. Here I
            took multiple college-level computer science courses to learn the
            basics of programming in Java, C++, and Swift."
        />
      </Jobs>

      <LinkButton>
        <Link href="/projects">
          <a>Check out some of my projects!</a>
        </Link>
      </LinkButton>
    </HomeStyles>
  </>
)

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;

    span {
      color: #eece1a;
    }
  }

  h1,
  h2 {
    text-align: center;
  }

  img {
    border: 2px solid #eece1a;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 300px;
    border-radius: 50%;
  }

  h3 {
    margin: 2rem 0;
    text-align: center;
  }
`

const Jobs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default Home
