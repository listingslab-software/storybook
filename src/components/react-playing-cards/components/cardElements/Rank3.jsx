import React from "react";
const Rank3 = props => {
    if (!props.c) {
        return null;
    }
    let suitColour;
    const { c, suit } = props;
    switch (suit) {
        case 'Clubs':
            suitColour = c.black;
            break;
        case 'Diamonds':
            suitColour = c.red;
            break;
        case 'Hearts':
            suitColour = c.red;
            break;
        case 'Spades':
            suitColour = c.black;
            break;
        default:
            suitColour = `#ccc`;
    }
    return (
        <svg {...props} viewBox="0 0 15 25">
            <g id="Rank3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={suitColour}>
                    <path d="M8.144,7.788 L14.021,2.54 L14.041,2.54 L14.041,2.522 L14.046,2.517 L14.041,2.511 L14.041,-1.77635684e-15 L0.511,0.001 L0.518,1.813 L0.518,4.069 L2.596,4.069 L2.596,2.528 L10.509,2.536 L2.741,9.731 L3.861,11.39 C4.708,10.61 5.771,10.145 6.939,10.145 C8.309,10.145 9.682,10.786 10.582,11.825 C11.478,12.866 12.03,14.292 12.031,15.878 C12.03,17.466 11.478,18.89 10.582,19.932 C9.682,20.972 8.309,21.61 6.939,21.61 C5.569,21.61 4.338,20.972 3.439,19.932 C2.791,19.179 2.322,18.224 2.113,17.153 L-8.8817842e-16,17.589 C0.68,21.306 3.529,24.093 6.939,24.095 C10.856,24.093 14.173,20.417 14.174,15.878 C14.173,11.815 11.512,8.45 8.144,7.788" id="Fill-23"></path>
                </g>
            </g>
        </svg >
    )
};
export default Rank3;
