import React from "react";
const Rank8 = props => {
    if (!props.c) {
        return null;
    }
    const { c } = props;
    const { suitColour } = c;
    return (
        <svg {...props} viewBox="0 0 15 25">
            <g id="Rank8" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g fill={suitColour}>
                    <path d="M12.0530009,11.937 C11.6840009,11.573 11.2730009,11.257 10.8340009,10.983 C11.0210009,10.838 11.2020009,10.685 11.3720009,10.518 C12.4870009,9.428 13.2080009,7.867 13.2070009,6.136 C13.2080009,4.404 12.4870009,2.844 11.3720009,1.753 C10.2570009,0.658 8.7420009,-2.66453526e-14 7.0870009,-2.66453526e-14 C5.4320009,-2.66453526e-14 3.9170009,0.658 2.8020009,1.753 C1.6880009,2.844 0.967000899,4.404 0.968000899,6.136 C0.967000899,7.867 1.6880009,9.428 2.8020009,10.518 C2.9720009,10.685 3.1540009,10.838 3.3400009,10.983 C2.9020009,11.257 2.4910009,11.573 2.1210009,11.937 C0.832000899,13.199 -0.000999100638,15.002 3.55271368e-15,17 C-0.000999100638,18.998 0.832000899,20.8 2.1210009,22.063 C3.4110009,23.331 5.1670009,24.093 7.0870009,24.094 C9.0060009,24.093 10.7630009,23.331 12.0530009,22.063 C13.3430009,20.8 14.1760009,18.998 14.173009,17 C14.1760009,15.002 13.3430009,13.199 12.0530009,11.937 Z M4.2610009,3.53 C4.9660009,2.837 5.9640009,2.38899833 7.0850009,2.38899833 L7.0870009,2.38899833 C8.2100009,2.388 9.2070009,2.837 9.9140009,3.53 C10.6190009,4.228 11.0220009,5.138 11.0230009,6.136 C11.0220009,7.134 10.6190009,8.044 9.9140009,8.741 C9.2070009,9.434 8.2100009,9.884 7.0870009,9.88300166 C5.9650009,9.884 4.9660009,9.434 4.2610009,8.741 C3.5570009,8.044 3.1530009,7.134 3.1520009,6.136 C3.1530009,5.138 3.5570009,4.228 4.2610009,3.53 Z M10.5040009,20.177 C9.6500009,21.018 8.4410009,21.559 7.0870009,21.5580014 C5.7340009,21.559 4.5250009,21.018 3.6690009,20.177 C2.8140009,19.33 2.3200009,18.22 2.3180009,17 C2.3200009,15.779 2.8140009,14.668 3.6690009,13.822 C4.5250009,12.981 5.7310009,12.4399986 7.0850009,12.4399986 L7.0870009,12.4399986 C8.4410009,12.439 9.6500009,12.981 10.5040009,13.822 C11.3610009,14.668 11.8560009,15.779 11.8570009,17 C11.8560009,18.22 11.3610009,19.33 10.5040009,20.177 L10.5040009,20.177 Z" id="Fill-100"></path>
                </g>
            </g>
        </svg >
    )
};
export default Rank8;