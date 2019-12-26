import React from 'react'
import styled from 'styled-components'

const JobStyles = styled.div`
  background: #515151;
  padding: 0.5rem;
  border: 1px solid black;
  border-bottom: solid 5px #eece1a;
  border-radius: 5px;
  width: 300px;
  margin: 0.5rem;

  h2,
  h6 {
    margin-bottom: 0.5rem;
  }
`

const Job = ({ title, position, description }) => {
  return (
    <JobStyles>
      <h2>{title}</h2>
      <h6>{position}</h6>
      <p>{description}</p>
    </JobStyles>
  )
}

export default Job
