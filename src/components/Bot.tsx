export default function Bot() {
    return (
        <>
            <div style={{ maxWidth: "250px" }}>
                <svg id="robot"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="153 71 203 294"
                >
                    <defs>
                        <radialGradient
                            id="color-2-0"
                            cx="235.953"
                            cy="197.92"
                            r="55.675"
                            gradientTransform="matrix(.03163 -4.44091 .99997 .00712 50.762 1257.162)"
                            gradientUnits="userSpaceOnUse"
                            xlinkHref="#color-2"
                        ></radialGradient>
                        <linearGradient id="color-2">
                            <stop offset="0" stopColor="rgb(52, 169, 151)"></stop>
                            <stop offset="1" stopColor="rgb(27, 115, 109)"></stop>                           
                        </linearGradient>
                        <filter
                            id="drop-shadow-filter-1"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur in="SourceAlpha"></feGaussianBlur>
                            <feOffset dy="2"></feOffset>
                            <feComponentTransfer result="offsetblur">
                                <feFuncA slope="1.9" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.4)"></feFlood>
                            <feComposite in2="offsetblur" operator="in"></feComposite>
                            <feMerge>
                                <feMergeNode></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                        <filter
                            id="inner-shadow-filter-3"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feOffset></feOffset>
                            <feGaussianBlur></feGaussianBlur>
                            <feComposite in="SourceGraphic" operator="out"></feComposite>
                            <feComponentTransfer result="choke">
                                <feFuncA slope="1.26" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.7)" result="color"></feFlood>
                            <feComposite
                                in="color"
                                in2="choke"
                                operator="in"
                                result="shadow"
                            ></feComposite>
                            <feComposite in="shadow" in2="SourceGraphic"></feComposite>
                        </filter>
                        <filter
                            id="drop-shadow-filter-0"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur in="SourceAlpha"></feGaussianBlur>
                            <feOffset dx="10" dy="10"></feOffset>
                            <feComponentTransfer result="offsetblur">
                                <feFuncA slope="1" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.3)"></feFlood>
                            <feComposite in2="offsetblur" operator="in"></feComposite>
                            <feMerge>
                                <feMergeNode></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                        <linearGradient
                            id="color-2-3"
                            x1="253.657"
                            x2="253.657"
                            y1="278.769"
                            y2="303.431"
                            gradientTransform="matrix(.9997 -.02433 .10247 4.21088 -27.65 -895.662)"
                            gradientUnits="userSpaceOnUse"
                            xlinkHref="#color-2"
                        ></linearGradient>
                        <filter
                            id="inner-shadow-filter-0"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="9"></feGaussianBlur>
                            <feComposite in="SourceGraphic" operator="out"></feComposite>
                            <feComponentTransfer result="choke">
                                <feFuncA slope="2" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.7)" result="color"></feFlood>
                            <feComposite
                                in="color"
                                in2="choke"
                                operator="in"
                                result="shadow"
                            ></feComposite>
                            <feComposite in="shadow" in2="SourceGraphic"></feComposite>
                        </filter>
                        <linearGradient
                            id="color-1-2"
                            x1="168.351"
                            x2="168.351"
                            y1="175.594"
                            y2="282.622"
                            gradientTransform="matrix(.9533 -.24106 .00223 .0091 7.472 214.58)"
                            gradientUnits="userSpaceOnUse"
                            xlinkHref="#color-1"
                        ></linearGradient>
                        <linearGradient id="color-1">
                            <stop offset="0" stopColor="rgb(255, 255, 255)"></stop>
                            <stop offset="0.71" stopColor="rgb(52, 169, 151)"></stop>
                            <stop offset="1" stopColor="rgb(27, 115, 109)"></stop>
                        </linearGradient>
                        <filter
                            id="inner-shadow-filter-2"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                            <feComposite in="SourceGraphic" operator="out"></feComposite>
                            <feComponentTransfer result="choke">
                                <feFuncA slope="2" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.7)" result="color"></feFlood>
                            <feComposite
                                in="color"
                                in2="choke"
                                operator="in"
                                result="shadow"
                            ></feComposite>
                            <feComposite in="shadow" in2="SourceGraphic"></feComposite>
                        </filter>
                        <linearGradient
                            id="color-1-3"
                            x1="316.73"
                            x2="316.73"
                            y1="176.54"
                            y2="283.568"
                            gradientTransform="matrix(.99328 -.28948 .78218 2.45071 -89.557 -346.722)"
                            gradientUnits="userSpaceOnUse"
                            xlinkHref="#color-1"
                        ></linearGradient>
                        <filter
                            id="inner-shadow-filter-1"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                            <feComposite in="SourceGraphic" operator="out"></feComposite>
                            <feComponentTransfer result="choke">
                                <feFuncA slope="2" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.7)" result="color"></feFlood>
                            <feComposite
                                in="color"
                                in2="choke"
                                operator="in"
                                result="shadow"
                            ></feComposite>
                            <feComposite in="shadow" in2="SourceGraphic"></feComposite>
                        </filter>
                        <filter
                            id="drop-shadow-filter-2"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur in="SourceAlpha" stdDeviation="12"></feGaussianBlur>
                            <feOffset dy="339"></feOffset>
                            <feComponentTransfer result="offsetblur">
                                <feFuncA slope="1.56" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.28)"></feFlood>
                            <feComposite in2="offsetblur" operator="in"></feComposite>
                            <feMerge>
                                <feMergeNode></feMergeNode>
                                <feMergeNode in="SourceGraphic"></feMergeNode>
                            </feMerge>
                        </filter>
                        <radialGradient
                            id="gradient-0"
                            cx="251.866"
                            cy="97.073"
                            r="1.453"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="rgba(0, 0, 0, 1)"></stop>
                            <stop offset="1" stopColor="rgba(0, 0, 0, 1)"></stop>
                        </radialGradient>
                        <linearGradient
                            id="color-2-1"
                            x1="316.73"
                            x2="316.73"
                            y1="176.54"
                            y2="283.568"
                            gradientTransform="matrix(1.0016 -.0136 .0203 1.46832 -4.56 -57.733)"
                            gradientUnits="userSpaceOnUse"
                            xlinkHref="#color-2"
                        ></linearGradient>
                        <filter
                            id="filter-1"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                            <feComposite in="SourceGraphic" operator="out"></feComposite>
                            <feComponentTransfer result="choke">
                                <feFuncA slope="0.56" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.7)" result="color"></feFlood>
                            <feComposite
                                in="color"
                                in2="choke"
                                operator="in"
                                result="shadow"
                            ></feComposite>
                            <feComposite in="shadow" in2="SourceGraphic"></feComposite>
                        </filter>
                        <linearGradient
                            id="color-2-2"
                            x1="168.351"
                            x2="168.351"
                            y1="175.594"
                            y2="282.622"
                            gradientUnits="userSpaceOnUse"
                            xlinkHref="#color-2"
                        ></linearGradient>
                        <filter
                            id="filter-2"
                            width="200%"
                            height="200%"
                            x="-50%"
                            y="-50%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feOffset></feOffset>
                            <feGaussianBlur stdDeviation="10"></feGaussianBlur>
                            <feComposite in="SourceGraphic" operator="out"></feComposite>
                            <feComponentTransfer result="choke">
                                <feFuncA slope="0" type="linear"></feFuncA>
                            </feComponentTransfer>
                            <feFlood floodColor="rgba(0,0,0,0.7)" result="color"></feFlood>
                            <feComposite
                                in="color"
                                in2="choke"
                                operator="in"
                                result="shadow"
                            ></feComposite>
                            <feComposite in="shadow" in2="SourceGraphic"></feComposite>
                        </filter>
                    </defs>
                    <path
                        fill="url('#color-2-0')"
                        stroke="rgba(0,0,0,0)"
                        d="M247.093 116.526h11.351a50 50 0 0150 50v78.918a30 30 0 01-30 30h-51.351a30 30 0 01-30-30v-78.918a50 50 0 0150-50z"
                        filter="none"
                        paintOrder="fill"
                    ></path>
                    <path
                        stroke="rgba(0,0,0,0)"
                        d="M241.41 166.694h36.114a21.424 21.424 0 0121.424 21.424v11.981a12 12 0 01-12 12h-54.914a12 12 0 01-12-12V188.07a21.376 21.376 0 0121.376-21.376z"
                        filter="url('#drop-shadow-filter-1')"
                        transform="matrix(1 0 .0022 1 -6.603 -20.439)"
                    ></path>
                    <ellipse
                        cx="232.768"
                        cy="171.931"
                        fill="#6ED3D8"
                        stroke="rgba(0,0,0,0)"
                        rx="11.351"
                        ry="11.081"
                    >
                        <animate id="lefteye" attributeType="CSS" attributeName="ry" from="0" to="11.081" dur="0.25s"
                            begin="2s;lefteye.end+2"></animate>
                    </ellipse>
                    <ellipse
                        cx="275.201"
                        cy="172.85"
                        fill="#43D5D8"
                        stroke="rgba(0,0,0,0)"
                        filter="url('#inner-shadow-filter-3')"
                        rx="11.351"
                        ry="11.081"
                    >
                        <animate id="rightteye" attributeType="CSS" attributeName="ry" from="0" to="11.081" dur="0.25s"
                            begin="2s;rightteye.end+2"></animate>
                    </ellipse>
                    <ellipse
                        id="indred"
                        style={{ isolation: "isolate" }}
                        cx="263.309"
                        cy="206.877"
                        fill="#FFF"
                        stroke="rgba(0,0,0,0)"
                        filter="url('#drop-shadow-filter-0')"
                        rx="3.514"
                        ry="3.243"
                    ></ellipse>
                    <ellipse
                        id="indgreen"
                        cx="284.931"
                        cy="206.526"
                        fill="#FFF"
                        stroke="rgba(0,0,0,0)"
                        rx="3.514"
                        ry="3.243"
                    ></ellipse>
                    <ellipse
                        cx="273.93"
                        cy="206.796"
                        fill="rgb(49, 49, 232)"
                        stroke="rgba(0,0,0,0)"
                        rx="3.514"
                        ry="3.243"
                    ></ellipse>
                    <path
                        fill="url('#color-2-3')"
                        stroke="rgba(0,0,0,0)"
                        d="M224.741 278.769h57.838c-.77 33.268-58.507 32.494-57.838 0z"
                        filter="url('#inner-shadow-filter-0')"
                    ></path>
                    <ellipse
                        id="robotlh-in"
                        cx="168.351"
                        cy="229.108"
                        fill="url('#color-1-2')"
                        stroke="rgba(0,0,0,0)"
                        filter="url('#inner-shadow-filter-2')"
                        rx="10.541"
                        ry="53.514"
                        transform="matrix(1 0 -.07143 1 25.89 5.715)"
                    ></ellipse>
                    <ellipse
                        id="robotrh-in"
                        cx="316.73"
                        cy="230.054"
                        fill="url('#color-1-3')"
                        stroke="rgba(0,0,0,0)"
                        filter="url('#inner-shadow-filter-1')"
                        rx="10.541"
                        ry="53.514"
                        transform="matrix(1 0 .1247 1 -17.165 5.715)"
                    ></ellipse>
                    <rect
                        width="22.033"
                        height="4.629"
                        x="241.185"
                        y="109.85"
                        stroke="rgba(0,0,0,0)"
                        filter="url('#drop-shadow-filter-2')"
                        rx="4.575"
                        ry="4.575"
                    ></rect>
                    <path
                        fill="url('#gradient-0')"
                        stroke="rgba(0,0,0,0)"
                        d="M250.413 84.321H253.31900000000002V109.825H250.413z"
                    ></path>
                    <ellipse
                    id="indcyn"
                        cx="251.705"
                        cy="80.871"
                        fill="#11FFF3"
                        stroke="rgba(0,0,0,0)"
                        rx="4.197"
                        ry="4.359"
                    ></ellipse>
                    <path
                    id="path1"
                        fill="rgba(63, 172, 174,0.3)"
                        stroke="rgba(0,0,0,0)"
                        d="M221.902 317.864a32 6.977 0 1064 0 32 6.977 0 10-64 0zM226.942 317.864a26.96 4.186 0 0153.92 0 26.96 4.186 0 01-53.92 0zM231.298 336.282a23 6.698 0 1046 0 23 6.698 0 10-46 0zM235.376 336.282a18.922 4.019 0 0137.844 0 18.922 4.019 0 01-37.844 0zM240.413 353.585a14 5.025 0 1028 0 14 5.025 0 10-28 0zm3.115 0a10.885 3.015 0 0121.77 0 10.885 3.015 0 01-21.77 0z"
                    ></path>
                    <path
                        fill="none"
                        stroke="rgba(0,0,0,0.3)"
                        d="M197.062 248.14c7.863 6.654 120.263 6.404 111.124-2.206M197.387 246.702c7.863 6.654 120.263 6.404 111.124-2.206"
                        paintOrder="stroke"
                    ></path>
                    <ellipse
                        id="robotrh"
                        cx="316.73"
                        cy="230.054"
                        fill="url('#color-2-1')"
                        stroke="rgba(0,0,0,0)"
                        filter="url('#filter-1')"
                        rx="10.541"
                        ry="53.514"
                        transform="matrix(1 0 .1247 1 -14.411 5.078)"
                    ></ellipse>
                    <ellipse
                        id="robotlh"
                        cx="168.351"
                        cy="229.108"
                        fill="url('#color-2-2')"
                        stroke="rgba(0,0,0,0)"
                        filter="url('#filter-2')"
                        rx="10.541"
                        ry="53.514"
                        transform="matrix(1 0 -.07143 1 22.755 5.446)"
                    ></ellipse>
                </svg>
                <div className="shadow"></div>
            </div>
           
        </>
    )
}