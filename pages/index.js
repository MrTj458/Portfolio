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
        Hello! I am a student at Salt Lake Community College that loves all
        things programming and builds full-stack websites!
      </h3>
      <h2>My Education</h2>
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
          title="Salt Lake Community College"
          position="Computer Science Student"
          description="I am currently attending SLCC majoring in computer science.
            I have completed CS class through 2420 (Data structures & algorithms).
            I upload a lot of my completed college assignments to my Github page."
        />
        <Job
          title="CTEC"
          position="Computer Science Student"
          description="Canyons Technical Education Center is a tech school that I went to alongside high school. Here I
            took multiple college-level computer science courses to learn the
            basics of programming in Java, C++, and Swift."
        />
      </Jobs>

      <Knowledge>
        <h2 className="title">What do I know?</h2>
        <div>
          <h3>
            I have played around with a lot of different languages and libraries
            as I like to see what is out there and find what I like the best.
            Some of the technologies I know the best (In no particular order)
            are:
          </h3>
          <ul>
            <li>Javascript / Node.js</li>
            <li>Express.js / Apollo Server</li>
            <li>React.js (Next.js, Apollo Client, Redux, React Router)</li>
            <li>Python 3</li>
            <li>Django / Django Rest Framework</li>
            <li>SQL (Mainly PostgreSQL)</li>
            <li>Git / Github</li>
            <li>Java / C# (Mostly used in college classes)</li>
          </ul>
        </div>
      </Knowledge>

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

const Knowledge = styled.div`
  margin-top: 20px;

  h3 {
    margin-top: 10px;
  }

  ul {
    margin: 0 auto;
    width: 75%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  li {
    margin: 3px;
  }
`

export default Home
