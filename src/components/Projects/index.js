import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a many projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'React.Js' ?
            <ToggleButton active value="web app" onClick={() => setToggle('React.Js')}>React.Js</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('React.Js')}>React.Js</ToggleButton>
          }
          <Divider />
          {toggle === 'HTML+CSS+JS' ?
            <ToggleButton active value="android app" onClick={() => setToggle('HTML+CSS+JS')}>HTML+CSS+JS</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('HTML+CSS+JS')}>HTML+CSS+JS</ToggleButton>
          }
          <Divider />
          {toggle === 'React+SpringBoot' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('React+SpringBoot')}>React+SpringBoot</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('React+SpringBoot')}>React+SpringBoot</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects