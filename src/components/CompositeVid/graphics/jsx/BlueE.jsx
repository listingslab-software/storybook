import React from "react";
const BlueE = props => {
    const { colors } = props;
    const c = {
        fill: `#4CA5FF`,
    };
    if (colors) {
        if (colors.fill) c.fill = colors.fill;
    }
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 37 41">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-127.000000, -23.000000)" fill={c.fill} fillRule="nonzero">
                        <path d="M157.19,60.73 C154.29,62.918 150.629,64 146.22,64 C143.1,64 140.39,63.48 138.11,62.48 C135.83,61.48 133.91,60.06 132.339,58.23 C130.779,56.418 129.619,54.23 128.839,51.7 C128.06,49.16 127.619,46.41 127.529,43.41 C127.529,40.431 127.979,37.69 128.889,35.21 C129.798,32.74 131.059,30.58 132.699,28.75 C134.329,26.94 136.269,25.52 138.519,24.5 C140.748,23.5 143.208,22.99 145.878,22.99 C149.349,22.99 152.219,23.74 154.519,25.21 C156.798,26.67 158.649,28.55 160.019,30.83 C161.399,33.11 162.369,35.61 162.899,38.3 C163.429,40.99 163.628,43.55 163.539,45.99 L134.529,45.99 C134.469,47.599 134.669,49.12 135.129,50.55 C135.56,51.99 136.279,53.26 137.279,54.37 C138.279,55.48 139.549,56.349 141.099,57.01 C142.628,57.67 144.439,57.99 146.529,57.99 C149.219,57.99 151.409,57.42 153.129,56.26 C154.85,55.102 155.97,53.352 156.539,50.99 L162.839,50.99 C161.98,55.311 160.1,58.561 157.19,60.73 Z M155.54,35.69 C154.96,34.35 154.19,33.18 153.24,32.19 C152.27,31.22 151.15,30.44 149.83,29.86 C148.52,29.28 147.07,28.99 145.5,28.99 C143.86,28.99 142.391,29.28 141.08,29.86 C139.77,30.44 138.66,31.24 137.721,32.24 C136.781,33.24 136.031,34.41 135.491,35.74 C134.941,37.07 134.631,38.49 134.531,39.99 L156.541,39.99 C156.44,38.49 156.1,37.05 155.54,35.69 Z"></path>
                    </g>
                </g>
            </svg>
        </React.Fragment>
    )
};
export default BlueE;