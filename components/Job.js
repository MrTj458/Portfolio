import React from 'react'
import styled from 'styled-components'

const Job = ({ title, position, description }) => (
  <JobStyles>
    <h2>{title}</h2>
    <h6>{position}</h6>
    <p>{description}</p>
  </JobStyles>
)

const JobStyles = styled.div`
  background: #515151;
  padding: 0.5rem;
  border: 1px solid black;
  border-bottom: solid 5px #eece1a;
  border-radius: 5px;
  width: 300px;
  margin: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  h2,
  h6 {
    margin-bottom: 0.5rem;
  }
`

export default Job
