import './Projects.css'
import { useState, useEffect } from 'react'
import { getProject, getProjects } from '../api'
import { ProjectContainer } from './ProjectContainer'

export const Projects = () => {

    /*
    const [projects, setProjects] = useState([])
    useEffect(() => {
        async function loadAllProjects() {
            const projects = await getProjects()
            if(projects)
            {
                setProjects(projects)
            }
        }
        loadAllProjects()
    }, [])
    const tProjectComps = []

    for(const tProject of projects)
    {
        tProjectComps.push(<ProjectContainer key={tProject._id} ghLink={tProject.ghLink} title={tProject.title} imageLink={tProject.imagelink} className='proj-elem'/>)
    }
        */

    return (
        <div className='project-main' id='projJump'>
            <div className='proj-header'>
                <p>
                    PROJECTS
                </p>
            </div>
            <div className='slider-section'>
                {/* <div className='navigation'>
                    <i className='fa-solid fa-chevron-left btn-slide'/>
                </div> */}
                <div className='proj-section'>
                <ProjectContainer ghLink={'https://github.com/user040213/GBMoo'} title={'GBMoo Gameboy Emulator'} imageLink={'https://raw.githubusercontent.com/user040213/GBMoo/refs/heads/main/resources/images/GBMooTetris.png'} className='proj-elem'/>
                <ProjectContainer ghLink={'https://github.com/user040213/CHIP8'} title={'CHIP-8 Emulator'} imageLink={'https://raw.githubusercontent.com/user040213/CHIP8/refs/heads/main/images/IBMSplash.png'} className='proj-elem'/>
                <ProjectContainer ghLink={'https://github.com/jzhou-k/EV3-Drawing-Robot'} title={'EV3 Drawing Robot'} imageLink={'https://raw.githubusercontent.com/jzhou-k/EV3-Drawing-Robot/refs/heads/master/images/drawingRobot.jpg'} className='proj-elem'/>
                <ProjectContainer ghLink={'https://github.com/user040213/Caverneer'} title={'Caverneer'} imageLink={'https://raw.githubusercontent.com/user040213/Caverneer/refs/heads/main/images/TitleScreen.png'} className='proj-elem'/>
                
                </div>
                {/* <div className='navigation'>
                    <i className='fa-solid fa-chevron-right btn-slide'/>
                </div> */}
            </div>
        </div>
    )
}