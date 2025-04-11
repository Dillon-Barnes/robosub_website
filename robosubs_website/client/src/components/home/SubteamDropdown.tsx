import React from "react";
import { TfiPlus } from "react-icons/tfi";

interface SubteamDropdownProps {
    name: string;
    description: string;
    tools: string;
    imageStyle: React.CSSProperties;
    stateStyle: React.CSSProperties;
    buttonStyle: React.CSSProperties;
    dispatchTypeOpen: number;
    dispatchTypeClose: number;
    imageState: React.MutableRefObject<React.CSSProperties>;
    dispatch: React.Dispatch<any>;
    dropdownContentStyleClose: React.CSSProperties;
}

export const SubteamDropdown: React.FC<SubteamDropdownProps> = ({
    name,
    description,
    tools,
    imageStyle,
    stateStyle,
    buttonStyle,
    dispatchTypeOpen,
    dispatchTypeClose,
    imageState,
    dispatch,
    dropdownContentStyleClose,
}) => {
    return (
        <button
            className="subteam_dropdown"
            onClick={() => {
                imageState.current = imageStyle;
                stateStyle === dropdownContentStyleClose
                    ? dispatch({ type: dispatchTypeOpen })
                    : dispatch({ type: dispatchTypeClose });
            }}
        >
            <div className="subteam_dropdown_inner">
                <div className="subteam_title">
                    <div className="dropdown_header_container">
                        <p>{name}</p>
                    </div>
                    <div className="dropdown_icon_container">
                        <p>
                            <TfiPlus style={buttonStyle} />
                        </p>
                    </div>
                </div>
                <div className="subteam_content" style={stateStyle}>
                    <p>{description}</p>
                    <br />
                    <p>Tools: {tools}</p>
                </div>
            </div>
        </button>
    );
};