import React from "react";
const Rank5 = props => {
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
            <g id="Rank5" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={suitColour}>
                    <path d="M12.065,8.96 C10.752,7.339 8.872,6.284 6.778,6.286 C5.468,6.284 4.242,6.702 3.186,7.407 L3.182,2.376 L12.548,2.376 L12.548,0 L0.943,0 L0.943,0.831 L0.931,0.831 L0.938,10.563 L3.188,10.563 C3.945,9.474 5.59,8.663 6.778,8.661 C8.145,8.663 9.399,9.335 10.356,10.507 C11.307,11.677 11.923,13.335 11.922,15.19 C11.923,17.046 11.307,18.703 10.356,19.873 C9.399,21.044 8.145,21.718 6.778,21.718 C5.765,21.718 4.827,21.353 4.011,20.69 C3.198,20.03 2.521,19.067 2.102,17.911 L8.8817842e-16,18.762 C0.559,20.298 1.469,21.622 2.636,22.573 C3.801,23.522 5.237,24.096 6.778,24.0950013 C6.779,24.0950013 6.781,24.0950013 6.782,24.0950013 C8.875,24.0950013 10.754,23.04 12.065,21.42 C13.382,19.796 14.172,17.597 14.173,15.19 C14.172,12.784 13.382,10.584 12.065,8.96" id="Fill-61"></path>
                </g>
            </g>
        </svg >
    )
};
export default Rank5;
