import React from "react";
const BlueC = props => {
    const { colors } = props;
    const c = {
        fill: `#4CA5FF`,
    };
    if (colors) {
        if (colors.fill) c.fill = colors.fill;
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 36 41">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(0.000000, -23.000000)" fill={c.fill} fillRule="nonzero">
                        <path d="M26.02,30.83 C24.43,29.61 22.27,28.99 19.58,28.99 C17.27,28.99 15.351,29.41 13.8,30.25 C12.24,31.1 11,32.21 10.08,33.58 C9.16,34.97 8.5,36.57 8.101,38.38 C7.691,40.19 7.5,42.05 7.5,43.981 C7.5,45.76 7.71,47.492 8.13,49.182 C8.55,50.87 9.21,52.352 10.11,53.661 C11.02,54.981 12.19,56.02 13.64,56.811 C15.1,57.6 16.829,57.991 18.829,57.991 C21.979,57.991 24.43,57.211 26.209,55.631 C27.989,54.069 29.069,51.853 29.48,48.991 L36.009,48.991 C35.31,53.811 33.52,57.511 30.65,60.1 C27.77,62.7 23.85,64 18.9,64 C15.94,64 13.33,63.51 11.049,62.561 C8.77,61.59 6.85,60.231 5.27,58.452 C3.69,56.682 2.499,54.571 1.7,52.122 C0.89,49.662 0.5,46.962 0.5,44.02 C0.5,41.082 0.88,38.352 1.66,35.791 C2.44,33.221 3.61,31.001 5.21,29.101 C6.78,27.211 8.721,25.721 11.021,24.631 C13.321,23.531 15.991,22.991 19.05,22.991 C21.24,22.991 23.3,23.251 25.24,23.751 C27.16,24.271 28.87,25.061 30.34,26.131 C31.811,27.211 33.021,28.571 33.981,30.191 C34.92,31.821 35.521,33.751 35.781,35.991 L29.181,35.991 C28.68,33.77 27.62,32.05 26.02,30.83 Z" ></path>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default BlueC;