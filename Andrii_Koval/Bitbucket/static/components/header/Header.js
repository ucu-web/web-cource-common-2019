const renderHeader = () => {
    const container = document.createElement("header");
    container.className = "Layout__header";
    container.innerHTML = `<div class="Header">
        <div class="Header__nav-bar-wrapper">
            <svg class="Header__svg-logo" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMinYMin meet"
                 viewBox="0 0 443.43 98.26"
                 width="195.18" height="35">
                <defs>
                    <style> .logo__text__fill {
                        fill: #253858;
                    }

                    .header__svg-logo__icon--path--3 {
                        fill: #2684ff;
                    }

                    .header__svg-logo__icon--path--4 {
                        fill: url(#logo-gradient);
                    } </style>
                    <linearGradient id="logo-gradient" x1="64.01" y1="65.26" x2="32.99" y2="89.48"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0.18" stop-color="#0052cc"></stop>
                        <stop offset="1" stop-color="#2684ff"></stop>
                    </linearGradient>
                </defs>
                <title>Bitbucket logo</title>
                <g class="header__svg-logo__icon">
                    <path class="header__svg-logo__icon--path--3"
                          d="M2,41.25a2,2,0,0,0-2,2.32L8.49,95.11a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68l8.51-52.11a2,2,0,0,0-2-2.32ZM37.75,78.5h-13L21.23,60.12H40.9Z"></path>
                    <path class="header__svg-logo__icon--path--4"
                          d="M59.67,60.12H40.9L37.75,78.5h-13L9.4,96.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z"></path>
                </g>
                <g class="header__svg-logo__atlassian svg-hide-on-stuck">
                    <path class="logo__text__fill"
                          d="M160.49,5.22c0,2.6,1.21,4.66,5.92,5.57,2.81.59,3.4,1,3.4,2s-.59,1.5-2.57,1.5a14.51,14.51,0,0,1-6.83-1.85v4.23a14,14,0,0,0,6.78,1.47c4.93,0,6.88-2.2,6.88-5.46m0,0c0-3.08-1.63-4.53-6.24-5.52-2.54-.56-3.16-1.12-3.16-1.93,0-1,.91-1.45,2.6-1.45a14.63,14.63,0,0,1,5.95,1.47v-4A13.44,13.44,0,0,0,167.39,0c-4.55,0-6.91,2-6.91,5.22"></path>
                    <polygon class="logo__text__fill"
                             points="223.79 0.27 223.79 17.86 227.54 17.86 227.54 4.45 229.12 8.01 234.43 17.86 239.14 17.86 239.14 0.27 235.39 0.27 235.39 11.62 233.97 8.33 229.71 0.27 223.79 0.27"></polygon>
                    <rect class="logo__text__fill" x="195.85" y="0.27" width="4.1" height="17.6"></rect>
                    <path class="logo__text__fill"
                          d="M191.12,12.67c0-3.08-1.63-4.53-6.24-5.52-2.54-.56-3.16-1.12-3.16-1.93,0-1,.91-1.45,2.6-1.45a14.63,14.63,0,0,1,5.95,1.47v-4A13.44,13.44,0,0,0,184.45,0c-4.55,0-6.91,2-6.91,5.22,0,2.6,1.21,4.66,5.92,5.57,2.81.59,3.4,1,3.4,2s-.59,1.5-2.57,1.5a14.51,14.51,0,0,1-6.83-1.85v4.23a14,14,0,0,0,6.78,1.47c4.93,0,6.88-2.2,6.88-5.46"></path>
                    <polygon class="logo__text__fill"
                             points="128.65 0.27 128.65 17.86 137.08 17.86 138.4 14.06 132.78 14.06 132.78 0.27 128.65 0.27"></polygon>
                    <polygon class="logo__text__fill"
                             points="112.01 0.27 112.01 4.07 116.57 4.07 116.57 17.86 120.69 17.86 120.69 4.07 125.56 4.07 125.56 0.27 112.01 0.27"></polygon>
                    <path class="logo__text__fill"
                          d="M106,.27h-5.4l-6.14,17.6h4.69l.87-3a11.65,11.65,0,0,0,6.56,0l.87,3h4.69Zm-2.7,11.46a8,8,0,0,1-2.25-.32l2.25-7.68,2.25,7.68A8,8,0,0,1,103.33,11.73Z"></path>
                    <path class="logo__text__fill"
                          d="M151.6.27h-5.4l-6.14,17.6h4.69l.87-3a11.65,11.65,0,0,0,6.56,0l.87,3h4.69Zm-2.7,11.46a8,8,0,0,1-2.25-.32l2.25-7.68,2.25,7.68A8,8,0,0,1,148.89,11.73Z"></path>
                    <path class="logo__text__fill"
                          d="M214.71.27h-5.4l-6.14,17.6h4.69l.87-3a11.65,11.65,0,0,0,6.56,0l.87,3h4.69ZM212,11.73a8,8,0,0,1-2.25-.32L212,3.72l2.25,7.68A8,8,0,0,1,212,11.73Z"></path>
                </g>
                <g class="header__svg-logo__text">
                    <path class="logo__text__fill"
                          d="M116.87,39.57c11.79,0,17.51,5.81,17.51,15.14,0,7-3.17,11.26-9.68,12.85,8.54,1.41,12.76,6.07,12.76,14.26,0,9.24-6.25,15.58-19.18,15.58H94.43V39.57Zm-14.52,7.57V64.38h13.46c7.48,0,10.56-3.43,10.56-9s-3.34-8.27-10.56-8.27Zm0,24.29v18h16.19c7.57,0,11-2.73,11-8.54,0-6.16-3.26-9.5-11.17-9.5Z"></path>
                    <path class="logo__text__fill"
                          d="M150.4,36.49a4.94,4.94,0,0,1,5.28,5.28,5.28,5.28,0,0,1-10.56,0A4.94,4.94,0,0,1,150.4,36.49Zm-3.87,16.89h7.57v44h-7.57Z"></path>
                    <path class="logo__text__fill"
                          d="M183,90a24,24,0,0,0,4.75-.62v7.3a18.19,18.19,0,0,1-5.1.7c-9.42,0-14-5.54-14-13.73V60.42h-7.13v-7h7.13V44.06H176v9.33h11.7v7H176V83.48C176,87.35,178.29,90,183,90Z"></path>
                    <path class="logo__text__fill"
                          d="M218.95,98.26c-6.42,0-11.35-2.9-14-8.62v7.74h-7.57V35H205V61.3c2.82-5.81,8.1-8.8,14.87-8.8,11.7,0,17.6,9.94,17.6,22.88C237.43,87.79,231.27,98.26,218.95,98.26ZM217.8,59.54C211,59.54,205,63.86,205,73.62v3.52c0,9.77,5.54,14.08,12,14.08,8.54,0,12.94-5.63,12.94-15.84C229.86,64.82,225.64,59.54,217.8,59.54Z"></path>
                    <path class="logo__text__fill"
                          d="M245.35,53.38h7.57V80c0,7.92,3.17,11.44,10.38,11.44,7,0,11.88-4.66,11.88-13.55V53.38h7.57v44h-7.57V90.17a15.43,15.43,0,0,1-13.9,8.1c-10.12,0-15.93-7-15.93-19.1Z"></path>
                    <path class="logo__text__fill"
                          d="M325.25,96.24c-2.64,1.41-6.69,2-10.74,2-15.66,0-23-9.5-23-23,0-13.29,7.3-22.79,23-22.79A23.26,23.26,0,0,1,325,54.62v7A22.18,22.18,0,0,0,315,59.54c-11.44,0-16.1,7.22-16.1,15.75S303.69,91,315.22,91a27.8,27.8,0,0,0,10-1.58Z"></path>
                    <path class="logo__text__fill"
                          d="M333.88,97.38V35h7.57V74l18.92-20.59h9.86L349.54,75,371.1,97.38H360.8L341.44,76.79V97.38Z"></path>
                    <path class="logo__text__fill"
                          d="M396.18,98.26c-16.46,0-23.67-9.5-23.67-23,0-13.29,7.39-22.79,20.77-22.79,13.55,0,19,9.42,19,22.79v3.43H380.16c1.06,7.48,5.9,12.32,16.28,12.32a39,39,0,0,0,13.38-2.38v7C406.21,97.56,400.67,98.26,396.18,98.26Zm-16.1-26h24.55c-.44-8.18-4.14-12.85-11.7-12.85C384.91,59.37,380.87,64.56,380.08,72.22Z"></path>
                    <path class="logo__text__fill"
                          d="M438.68,90a24,24,0,0,0,4.75-.62v7.3a18.19,18.19,0,0,1-5.1.7c-9.42,0-14-5.54-14-13.73V60.42h-7.13v-7h7.13V44.06h7.39v9.33h11.7v7h-11.7V83.48C431.73,87.35,434,90,438.68,90Z"></path>
                </g>
            </svg>
            <nav class="Header__nav-bar">
                <a href="#" class="Header__nav-bar-link">Features</a>
                <a href="#" class="Header__nav-bar-link">Self-Hosted</a>
                <a href="#" class="Header__nav-bar-link">Pricing</a>
                <a href="login" class="Header__nav-bar-link Header__nav-bar-link-log-in">Log in</a>
            </nav>
            <div class="Header__get-started-container">
                <a href="#" class="Header__get-started-button">Get started</a>
            </div>
        </div>
        
    </div>`;
    return container;
};
export default renderHeader;