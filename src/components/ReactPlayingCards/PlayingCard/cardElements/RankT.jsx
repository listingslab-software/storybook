import React from "react";
const RankT = props => {
    if (!props.c) {
        return null;
    }
    const { c } = props;
    const { suitColour } = c;
    return (
        <svg {...props} viewBox="0 0 15 25">
            <g id="RankT" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={suitColour}>
                    <polygon id="Fill-116" points="2.22044605e-16 24.058 2.182 24.058 2.182 5.86197757e-14 2.22044605e-16 5.86197757e-14"></polygon>
                    <path d="M6.74,22.777 C5.946,21.961 5.437,20.797 5.43799853,19.516 L5.43799853,4.579 C5.437,3.297 5.946,2.134 6.74,1.317 C7.534,0.497 8.621,2.84217094e-14 9.806,2.84217094e-14 C10.991,2.84217094e-14 12.078,0.497 12.872,1.317 C13.665,2.134 14.174,3.297 14.1730015,4.579 L14.1730015,19.516 C14.174,20.797 13.665,21.961 12.872,22.777 C12.078,23.598 10.991,24.095 9.806,24.095 C8.621,24.095 7.534,23.598 6.74,22.777 Z M8.237,3.054 C7.844,3.462 7.62,3.991 7.619,4.579 L7.619,19.516 C7.62,20.104 7.844,20.632 8.237,21.041 C8.629,21.446 9.18,21.707 9.806,21.707 C10.43,21.707 10.982,21.446 11.375,21.041 C11.767,20.632 11.991,20.104 11.993,19.516 L11.993,4.579 C11.991,3.991 11.767,3.462 11.375,3.054 C10.982,2.649 10.43,2.388 9.806,2.388 C9.18,2.388 8.629,2.649 8.237,3.054 L8.237,3.054 Z" id="Fill-117"></path>
                </g>
            </g>
        </svg >
    )
};
export default RankT;
