import React, { useReducer, useRef } from "react";
import { TfiPlus } from 'react-icons/tfi'
import {initialState, reducer} from "./about_reducer.ts";
import {dropdown_content_style_close} from "./about_inline_style.ts";
import { image_style_mechanical, image_style_electrical, image_style_software, image_style_software_infrastructures } from "./Subteam_Image_style.ts";

export const Subteam: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const imageState = useRef(image_style_software)

    return (
        <div className='Subteam' id='Subteam'>
            <div className='Subteam_header'>
                <h1>Meet the Subteams</h1>
            </div>
            <div className='Subteam_Content'>
                <div className='dropdown_image'>
                    <div className='dropdown_image_inner' style={ imageState.current }></div>
                </div>
                <div className='dropdowns'>
                    <button className='subteam_dropdown' onClick={() => {
                        imageState.current = image_style_software;
                        state.software == dropdown_content_style_close ? dispatch({type: 1}) : dispatch({type: 5});
                    }}>
                        <div className='subteam_dropdown_inner'>
                            <div className='subteam_title'>
                                <div className='dropdown_header_container'>
                                    <p>Autonomy</p>
                                </div>
                                <div className='dropdown_icon_container'>
                                    <p><TfiPlus style={state.software_btn}/></p>
                                </div>
                            </div>
                            <div className='subteam_content' style={ state.software }>
                                <p>
                                    The objective of our autonomy team is to design the autonomous code that runs onboard the submarine. The team uses ROS2 (Robot Operating System 2), which is an open source set of Python/C++ libraries specifically geared for robotics software development.
                                    <br/>
                                    <br/>
                                    Since we are a brand new team we aim to focus on only 1 or 2 tasks during the competition, ensuring that we are able to accurately and reliably perform them for points. Additionally, the autonomy team has decided to use the Cube Orange which will be running ArduSub, a flight controller firmware. ArduSub will be able to take care of complex control system and sensor fusion code, allowing us to focus primarily on these key areas:
                                    <br/>
                                    <br/>
                                    • Vision
                                    <br/>
                                    • Localization
                                    <br/>
                                    • Decision Making
                                    <br/>
                                    • Simulation
                                    <br/>
                                </p>
                                <br/>
                                <p>
                                    Tools: ROS, Gazebo, Python, C++
                                </p>
                            </div>
                        </div>
                    </button>
                    <button className='subteam_dropdown' onClick={() => {
                        imageState.current = image_style_electrical;
                        state.electrical == dropdown_content_style_close ? dispatch({type: 2}) : dispatch({type: 5});
                    }}>
                        <div className='subteam_dropdown_inner'>
                            <div className='subteam_title'>
                                <div className='dropdown_header_container'>
                                    <p>Electrical</p>
                                </div>
                                <div className='dropdown_icon_container'>
                                    <p><TfiPlus style={state.electrical_btn}/></p>
                                </div>
                            </div>
                            <div className='subteam_content' style={ state.electrical }>
                                <p>
                                    The electrical team is responsible for taking all of the software commands and turning them into actions that the motors and other components of the submarine can execute. Our focus this season was primarily researching and looking at previous RoboSub teams’ electrical layouts, acquiring the electrical components that we plan on using, and designing a power distribution board for the submarine. Through the process the members of the electrical team have familiarized ourselves with how to design and order PCBs, as well as coming up with a solid plan that will get us to competition ready next season.
                                </p>
                                <br/>
                                <p>
                                    Tools & Equipment: Fusion 360, Nvidia Xavier AGX, Stereo Labs Zed Camera
                                </p>
                            </div>
                        </div>
                    </button>
                    <button className='subteam_dropdown' onClick={() => {
                        imageState.current = image_style_mechanical;
                        state.mechanical == dropdown_content_style_close ? dispatch({type: 3}) : dispatch({type: 5});
                    }}>
                        <div className='subteam_dropdown_inner'>
                            <div className='subteam_title'>
                                <div className='dropdown_header_container'>
                                    <p>Mechanical</p>
                                </div>
                                <div className='dropdown_icon_container'>
                                    <p><TfiPlus style={state.mechanical_btn}/></p>
                                </div>
                            </div>
                            <div className='subteam_content' style={ state.mechanical }>
                                <p>
                                    The mechanical team designs and fabricates the structural and mechanical components of the AUV, ensuring its integrity, functionality, and performance in challenging underwater conditions. They design and optimize the chassis, manipulators, other critical mechanical elements, ensuring their optimal performance and functionality. They also collaborate closely with the autonomous and electrical teams, integrating their designs and ensuring seamless coordination between mechanical, autonomous, and electrical systems. Through research, design, simulation, and rigorous testing, they contribute to the development of a robust and capable AUV that excels in underwater navigation and tasks.
                                </p>
                                <br/>
                                <p>
                                    Tools: CAD (Fusion 360), CFD, Waterjet, Laser Cutter, 3D Printer
                                </p>
                            </div>
                        </div>
                    </button>
                    <button className='subteam_dropdown' onClick={() => {
                        imageState.current = image_style_software_infrastructures;
                        state.software_infrastructure == dropdown_content_style_close ? dispatch({type: 4}) : dispatch({type: 5});
                    }}>
                        <div className='subteam_dropdown_inner'>
                            <div className='subteam_title'>
                                <div className='dropdown_header_container'>
                                    <p>Software Infrastructure</p>
                                </div>
                                <div className='dropdown_icon_container'>
                                    <p><TfiPlus style={state.software_infrastructure_btn}/></p>
                                </div>
                            </div>
                            <div className='subteam_content' style={ state.software_infrastructure }>
                                <br/>
                                <p>
                                    The Software Infrastructure subteam's goal is to build tools for Illini
                                    Robosubs to utilize. As of right now, our team is setting up the team website,
                                    documentation page, and Illini Robosubs administration page which is exclusive
                                    to Illini Robosubs members only. This page will allow members to edit the current
                                    website, as well as do other functionalities like manage transactions/budget, set
                                    weekly goals, create tasks, etc.
                                </p>
                                <br/>
                                <p>Tools: ReactJS, Typescript, Vite, CSS, NestJS, NodeJS, MongoDB, WikiJS, Docker, NginX</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}