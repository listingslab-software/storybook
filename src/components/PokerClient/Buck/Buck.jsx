import React from "react";
const Buck = props => {
    if (!props.c) {
        return null;
    }
    const { c } = props;
    console.log(c)
    return (
        <React.Fragment>
            <svg {...props} viewBox="0 0 189 189">
                <g id="Buck" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g>
                        <path d="M94.45,187.526 C43.04,187.526 1.37,145.852 1.37,94.445 C1.37,43.038 43.04,1.364 94.45,1.364 C145.86,1.364 187.53,43.038 187.53,94.445 C187.53,145.852 145.86,187.526 94.45,187.526" id="Fill-365" fill={c.colourLight}></path>
                        <path d="M94.45,2.728 C43.88,2.728 2.73,43.872 2.73,94.445 C2.73,145.017 43.88,186.162 94.45,186.162 C145.02,186.162 186.16,145.017 186.16,94.445 C186.16,43.872 145.02,2.728 94.45,2.728 Z M94.45,188.891 C42.37,188.891 -1.42108547e-14,146.522 -1.42108547e-14,94.445 C-1.42108547e-14,42.368 42.37,-1.42108547e-14 94.45,-1.42108547e-14 C146.53,-1.42108547e-14 188.89,42.368 188.89,94.445 C188.89,146.522 146.53,188.891 94.45,188.891 L94.45,188.891 Z" id="Fill-366" fill={c.colourRim}></path>
                        <path d="M94.45,163.01 C56.58,163.01 25.88,132.312 25.88,94.445 C25.88,56.578 56.58,25.881 94.45,25.881 C132.32,25.881 163.01,56.578 163.01,94.445 C163.01,132.312 132.32,163.01 94.45,163.01" id="Fill-367" fill={c.colourDark}></path>
                        <path d="M94.45,27.246 C57.39,27.246 27.25,57.391 27.25,94.445 C27.25,131.499 57.39,161.645 94.45,161.645 C131.5,161.645 161.65,131.499 161.65,94.445 C161.65,57.391 131.5,27.246 94.45,27.246 Z M94.45,164.374 C55.89,164.374 24.52,133.004 24.52,94.445 C24.52,55.887 55.89,24.517 94.45,24.517 C133.01,24.517 164.38,55.887 164.38,94.445 C164.38,133.004 133.01,164.374 94.45,164.374 L94.45,164.374 Z" id="Fill-368" fill={c.colourRim}></path>
                        <path d="M83.28,15.16 C82.61,15.16 82.03,14.664 81.93,13.981 C81.83,13.234 82.35,12.546 83.1,12.443 C86.81,11.935 90.6,11.676 94.37,11.672 C95.12,11.672 95.73,12.281 95.73,13.034 C95.73,13.788 95.12,14.399 94.37,14.4 C90.72,14.405 87.06,14.656 83.47,15.147 C83.41,15.155 83.35,15.16 83.28,15.16 Z M116.33,17.376 C116.21,17.376 116.09,17.36 115.96,17.326 C112.47,16.353 108.87,15.614 105.27,15.126 C104.52,15.025 104,14.338 104.1,13.592 C104.2,12.845 104.88,12.315 105.63,12.423 C109.36,12.926 113.08,13.691 116.7,14.697 C117.42,14.899 117.85,15.652 117.64,16.378 C117.48,16.981 116.93,17.376 116.33,17.376 Z M61.95,21.148 C61.42,21.148 60.92,20.843 60.7,20.33 C60.39,19.639 60.71,18.835 61.4,18.533 C64.84,17.033 68.42,15.757 72.04,14.741 C72.76,14.538 73.52,14.961 73.72,15.686 C73.93,16.412 73.5,17.166 72.78,17.369 C69.28,18.351 65.82,19.585 62.49,21.035 C62.31,21.112 62.13,21.148 61.95,21.148 Z M136.68,26.196 C136.43,26.196 136.19,26.132 135.97,25.998 C132.86,24.106 129.59,22.416 126.27,20.974 C125.57,20.675 125.26,19.87 125.56,19.18 C125.86,18.489 126.66,18.17 127.35,18.471 C130.79,19.962 134.17,21.71 137.39,23.665 C138.03,24.056 138.23,24.896 137.84,25.54 C137.59,25.962 137.14,26.196 136.68,26.196 Z M43.04,32.689 C42.64,32.689 42.25,32.518 41.98,32.187 C41.5,31.602 41.59,30.744 42.17,30.268 C45.08,27.893 48.18,25.698 51.39,23.743 C52.03,23.348 52.87,23.554 53.26,24.197 C53.65,24.841 53.45,25.68 52.81,26.072 C49.71,27.964 46.71,30.087 43.9,32.382 C43.64,32.589 43.34,32.689 43.04,32.689 Z M153.88,40.178 C153.52,40.178 153.15,40.033 152.89,39.746 C150.4,37.094 147.71,34.587 144.9,32.297 C144.31,31.821 144.22,30.962 144.7,30.377 C145.17,29.793 146.03,29.704 146.62,30.179 C149.53,32.548 152.31,35.139 154.88,37.881 C155.39,38.432 155.36,39.295 154.81,39.81 C154.55,40.057 154.22,40.178 153.88,40.178 Z M27.91,48.894 C27.64,48.894 27.36,48.813 27.12,48.645 C26.51,48.21 26.36,47.359 26.79,46.743 C28.96,43.678 31.36,40.729 33.92,37.98 C34.44,37.431 35.3,37.4 35.85,37.914 C36.4,38.429 36.43,39.292 35.92,39.843 C33.44,42.502 31.12,45.353 29.02,48.317 C28.76,48.694 28.34,48.894 27.91,48.894 Z M166.7,58.255 C166.2,58.255 165.73,57.987 165.49,57.52 C163.81,54.304 161.89,51.169 159.79,48.204 C159.36,47.59 159.5,46.738 160.12,46.303 C160.73,45.865 161.58,46.012 162.02,46.627 C164.19,49.691 166.17,52.933 167.91,56.26 C168.25,56.928 167.99,57.752 167.33,58.1 C167.12,58.205 166.91,58.255 166.7,58.255 Z M17.7,68.581 C17.55,68.581 17.4,68.557 17.25,68.503 C16.54,68.251 16.17,67.471 16.42,66.761 C17.67,63.221 19.19,59.733 20.92,56.394 C21.27,55.726 22.09,55.465 22.76,55.81 C23.43,56.158 23.69,56.981 23.34,57.65 C21.67,60.878 20.2,64.251 18.99,67.674 C18.79,68.232 18.27,68.581 17.7,68.581 Z M174.14,79.13 C173.51,79.13 172.94,78.687 172.81,78.043 C172.07,74.487 171.08,70.951 169.86,67.53 C169.6,66.821 169.97,66.041 170.68,65.787 C171.39,65.538 172.17,65.903 172.42,66.614 C173.69,70.151 174.72,73.809 175.48,77.487 C175.64,78.225 175.16,78.947 174.42,79.101 C174.33,79.121 174.24,79.13 174.14,79.13 Z M13.23,90.297 C13.2,90.297 13.16,90.296 13.13,90.294 C12.38,90.244 11.81,89.594 11.86,88.841 C12.11,85.086 12.62,81.321 13.38,77.65 C13.53,76.913 14.25,76.433 14.99,76.59 C15.73,76.742 16.21,77.463 16.05,78.201 C15.32,81.75 14.83,85.391 14.58,89.024 C14.54,89.744 13.94,90.297 13.23,90.297 Z M175.68,101.242 C175.65,101.242 175.62,101.241 175.59,101.239 C174.84,101.189 174.27,100.54 174.32,99.788 C174.43,98.023 174.49,96.226 174.49,94.445 C174.49,92.589 174.43,90.711 174.3,88.863 C174.25,88.111 174.82,87.46 175.57,87.408 C176.32,87.345 176.97,87.924 177.02,88.675 C177.15,90.586 177.22,92.527 177.22,94.445 C177.22,96.286 177.16,98.143 177.04,99.968 C176.99,100.688 176.39,101.242 175.68,101.242 Z M14.73,112.409 C14.1,112.409 13.53,111.966 13.4,111.322 C12.64,107.652 12.12,103.887 11.87,100.132 C11.82,99.381 12.38,98.729 13.14,98.679 C13.89,98.607 14.54,99.194 14.59,99.947 C14.84,103.578 15.33,107.22 16.07,110.767 C16.22,111.506 15.75,112.228 15.01,112.381 C14.92,112.4 14.82,112.409 14.73,112.409 Z M171.22,122.961 C171.07,122.961 170.91,122.936 170.76,122.883 C170.05,122.633 169.68,121.852 169.93,121.142 C171.14,117.714 172.13,114.17 172.86,110.61 C173.01,109.873 173.73,109.397 174.47,109.549 C175.21,109.7 175.68,110.422 175.53,111.16 C174.78,114.841 173.76,118.506 172.51,122.052 C172.31,122.611 171.78,122.961 171.22,122.961 Z M22.16,133.292 C21.67,133.292 21.2,133.024 20.95,132.557 C19.22,129.22 17.7,125.735 16.44,122.199 C16.19,121.489 16.56,120.709 17.27,120.456 C17.98,120.202 18.76,120.574 19.01,121.284 C20.23,124.703 21.7,128.072 23.37,131.299 C23.72,131.968 23.46,132.791 22.79,133.138 C22.59,133.243 22.38,133.292 22.16,133.292 Z M161.03,142.658 C160.76,142.658 160.49,142.578 160.25,142.41 C159.63,141.975 159.48,141.125 159.92,140.508 C162.01,137.537 163.92,134.395 165.59,131.169 C165.94,130.499 166.76,130.238 167.43,130.584 C168.1,130.931 168.36,131.753 168.01,132.423 C166.29,135.759 164.31,139.008 162.15,142.08 C161.88,142.457 161.46,142.658 161.03,142.658 Z M34.96,151.383 C34.59,151.383 34.23,151.236 33.96,150.95 C31.4,148.207 29,145.262 26.83,142.196 C26.39,141.581 26.54,140.729 27.16,140.294 C27.77,139.858 28.62,140.006 29.06,140.62 C31.16,143.585 33.48,146.433 35.95,149.086 C36.47,149.637 36.44,150.5 35.89,151.015 C35.63,151.261 35.29,151.383 34.96,151.383 Z M145.93,158.879 C145.53,158.879 145.14,158.709 144.87,158.378 C144.39,157.795 144.48,156.935 145.06,156.459 C147.87,154.16 150.56,151.646 153.03,148.988 C153.54,148.436 154.41,148.405 154.96,148.92 C155.51,149.433 155.54,150.297 155.03,150.849 C152.47,153.596 149.7,156.195 146.79,158.571 C146.54,158.778 146.23,158.879 145.93,158.879 Z M52.15,165.381 C51.91,165.381 51.66,165.316 51.44,165.182 C48.23,163.227 45.13,161.033 42.22,158.66 C41.63,158.183 41.54,157.325 42.02,156.74 C42.49,156.156 43.36,156.068 43.94,156.544 C46.76,158.84 49.76,160.962 52.86,162.85 C53.5,163.243 53.71,164.083 53.32,164.725 C53.06,165.147 52.61,165.381 52.15,165.381 Z M127.03,170.437 C126.5,170.437 126,170.132 125.77,169.619 C125.47,168.93 125.79,168.124 126.48,167.823 C129.8,166.37 133.06,164.673 136.16,162.777 C136.8,162.385 137.64,162.587 138.03,163.228 C138.43,163.871 138.22,164.712 137.58,165.104 C134.38,167.064 131.01,168.821 127.57,170.323 C127.39,170.401 127.21,170.437 127.03,170.437 Z M72.49,174.221 C72.37,174.221 72.24,174.205 72.12,174.17 C68.5,173.158 64.92,171.886 61.47,170.387 C60.78,170.086 60.46,169.282 60.76,168.591 C61.06,167.9 61.87,167.585 62.56,167.884 C65.89,169.333 69.35,170.563 72.86,171.543 C73.58,171.745 74,172.497 73.8,173.223 C73.63,173.826 73.09,174.221 72.49,174.221 Z M105.69,176.448 C105.02,176.448 104.43,175.954 104.34,175.271 C104.24,174.524 104.76,173.836 105.5,173.732 C109.11,173.233 112.71,172.482 116.2,171.501 C116.92,171.294 117.67,171.719 117.88,172.444 C118.08,173.169 117.66,173.923 116.93,174.127 C113.33,175.142 109.61,175.92 105.88,176.435 C105.82,176.444 105.75,176.448 105.69,176.448 Z M94.61,177.218 L94.45,177.218 C90.68,177.218 86.89,176.962 83.18,176.457 C82.44,176.356 81.91,175.668 82.01,174.922 C82.12,174.175 82.8,173.649 83.55,173.753 C87.14,174.241 90.8,174.489 94.45,174.489 L94.61,174.489 C95.36,174.489 95.98,175.1 95.98,175.853 C95.98,176.606 95.36,177.218 94.61,177.218 L94.61,177.218 Z" id="Fill-369" fill={c.colourRim}></path>
                        <path d="M56.77,93.876 C56.77,88.901 54.45,86.414 49.79,86.414 L46.85,86.414 L46.85,101.493 L49.27,101.493 C54.27,101.493 56.77,98.955 56.77,93.876 Z M60.35,93.762 C60.35,97.192 59.4,99.814 57.5,101.629 C55.59,103.443 52.85,104.35 49.27,104.35 L43.45,104.35 L43.45,83.572 L49.88,83.572 C53.19,83.572 55.76,84.463 57.6,86.244 C59.43,88.025 60.35,90.531 60.35,93.762 L60.35,93.762 Z" id="Fill-370" fill={c.colourRim}></path>
                        <polyline id="Fill-371" fill={c.colourRim} points="76.57 104.35 64.82 104.35 64.82 83.572 76.57 83.572 76.57 86.442 68.21 86.442 68.21 92.1 76.04 92.1 76.04 94.941 68.21 94.941 68.21 101.465 76.57 101.465 76.57 104.35"></polyline>
                        <path d="M90.98,95.652 L89.03,89.996 C88.89,89.617 88.69,89.02 88.44,88.205 C88.19,87.391 88.02,86.794 87.92,86.414 C87.67,87.58 87.29,88.854 86.8,90.237 L84.93,95.652 L90.98,95.652 Z M93.95,104.35 L91.88,98.58 L83.93,98.58 L81.9,104.35 L78.32,104.35 L86.09,83.486 L89.79,83.486 L97.56,104.35 L93.95,104.35 L93.95,104.35 Z" id="Fill-372" fill={c.colourRim}></path>
                        <polyline id="Fill-373" fill={c.colourRim} points="100.3 104.35 100.3 83.572 103.7 83.572 103.7 101.436 112.5 101.436 112.5 104.35 100.3 104.35"></polyline>
                        <polyline id="Fill-374" fill={c.colourRim} points="127.83 104.35 116.08 104.35 116.08 83.572 127.83 83.572 127.83 86.442 119.48 86.442 119.48 92.1 127.31 92.1 127.31 94.941 119.48 94.941 119.48 101.465 127.83 101.465 127.83 104.35"></polyline>
                        <path d="M135.72,93.236 L138.08,93.236 C139.66,93.236 140.81,92.943 141.52,92.355 C142.23,91.767 142.59,90.896 142.59,89.74 C142.59,88.565 142.2,87.722 141.43,87.21 C140.67,86.698 139.51,86.442 137.97,86.442 L135.72,86.442 L135.72,93.236 Z M135.72,96.05 L135.72,104.35 L132.32,104.35 L132.32,83.572 L138.19,83.572 C140.87,83.572 142.86,84.074 144.15,85.078 C145.44,86.083 146.08,87.6 146.08,89.626 C146.08,92.213 144.74,94.056 142.05,95.155 L147.91,104.35 L144.05,104.35 L139.08,96.05 L135.72,96.05 L135.72,96.05 Z" id="Fill-375" fill={c.colourRim}></path>
                    </g>
                </g>
            </svg >
        </React.Fragment>
    )
};
export default Buck;