import React, { useReducer, useRef } from "react";
import { initialState, reducer } from "./about_reducer.ts";
import { dropdown_content_style_close } from "./about_inline_style.ts";
import {
    image_style_mechanical,
    image_style_electrical,
    image_style_software,
    image_style_software_infrastructures,
} from "./Subteam_Image_style.ts";
import { SubteamDropdown } from "./SubteamDropdown";

export const Subteam: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const imageState = useRef(image_style_software);

    return (
        <div className="Subteam" id="Subteam">
            <div className="Subteam_header">
                <h1>Meet the Subteams</h1>
            </div>
            <div className="Subteam_Content">
                <div className="dropdown_image">
                    <div
                        className="dropdown_image_inner"
                        style={imageState.current}
                    ></div>
                </div>
                <div className="dropdowns">
                    <SubteamDropdown
                        name="Autonomy"
                        description="The objective of our autonomy team is to design the autonomous code that runs onboard the submarine. The team uses ROS2 (Robot Operating System 2), which is an open source set of Python/C++ libraries specifically geared for robotics software development."
                        tools="ROS, Gazebo, Python, C++"
                        imageStyle={image_style_software}
                        stateStyle={state.software}
                        buttonStyle={state.software_btn}
                        dispatchTypeOpen={1}
                        dispatchTypeClose={5}
                        imageState={imageState}
                        dispatch={dispatch}
                        dropdownContentStyleClose={dropdown_content_style_close}
                    />
                    <SubteamDropdown
                        name="Electrical"
                        description="The electrical team is responsible for taking all of the software commands and turning them into actions that the motors and other components of the submarine can execute. Our focus this season was primarily researching and looking at previous RoboSub teams’ electrical layouts, acquiring the electrical components that we plan on using, and designing a power distribution board for the submarine."
                        tools="Fusion 360, Nvidia Xavier AGX, Stereo Labs Zed Camera"
                        imageStyle={image_style_electrical}
                        stateStyle={state.electrical}
                        buttonStyle={state.electrical_btn}
                        dispatchTypeOpen={2}
                        dispatchTypeClose={5}
                        imageState={imageState}
                        dispatch={dispatch}
                        dropdownContentStyleClose={dropdown_content_style_close}
                    />
                    <SubteamDropdown
                        name="Mechanical"
                        description="The mechanical team designs and fabricates the structural and mechanical components of the AUV, ensuring its integrity, functionality, and performance in challenging underwater conditions."
                        tools="CAD (Fusion 360), CFD, Waterjet, Laser Cutter, 3D Printer"
                        imageStyle={image_style_mechanical}
                        stateStyle={state.mechanical}
                        buttonStyle={state.mechanical_btn}
                        dispatchTypeOpen={3}
                        dispatchTypeClose={5}
                        imageState={imageState}
                        dispatch={dispatch}
                        dropdownContentStyleClose={dropdown_content_style_close}
                    />
                    <SubteamDropdown
                        name="Software Infrastructure"
                        description="The Software Infrastructure subteam's goal is to build tools for Illini Robosubs to utilize. As of right now, our team is setting up the team website, documentation page, and Illini Robosubs administration page."
                        tools="ReactJS, Typescript, Vite, CSS, NestJS, NodeJS, MongoDB, WikiJS, Docker, NginX"
                        imageStyle={image_style_software_infrastructures}
                        stateStyle={state.software_infrastructure}
                        buttonStyle={state.software_infrastructure_btn}
                        dispatchTypeOpen={4}
                        dispatchTypeClose={5}
                        imageState={imageState}
                        dispatch={dispatch}
                        dropdownContentStyleClose={dropdown_content_style_close}
                    />
                </div>
            </div>
        </div>
    );
};