const SVG_ICONS = {
  // FILTER BOX
  /* 🚩 ~~~ TODO - new filter icon ~~~ 🚩 */
  filter: (width = 16, height = 16) => `
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-adjustments-horizontal" width="${width}" height="${height}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="14" cy="6" r="2" />
            <line x1="4" y1="6" x2="12" y2="6" />
            <line x1="16" y1="6" x2="20" y2="6" />
            <circle cx="8" cy="12" r="2" />
            <line x1="4" y1="12" x2="6" y2="12" />
            <line x1="10" y1="12" x2="20" y2="12" />
            <circle cx="17" cy="18" r="2" />
            <line x1="4" y1="18" x2="15" y2="18" />
            <line x1="19" y1="18" x2="20" y2="18" />
        </svg>
    `,

  // APP LOADER
  loader: `
                <div class="left-wheel-wrapper">
                <svg
                class="wheel"
                width="109"
                height="109"
                viewBox="0 0 109 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle class="main" cx="54.0287" cy="54.2471" r="52.0287" stroke="white" stroke-width="4" />
                <circle cx="54.3967" cy="53.8795" r="7.35085" fill="#fff" />
                <circle cx="54.0288" cy="21.9034" r="10.6587" fill="#fff" />
                <circle cx="81.2261" cy="37.3401" r="10.6587" fill="#fff" />
                <circle cx="81.2261" cy="67.4786" r="10.6587" fill="#fff" />
                <circle cx="54.0288" cy="85.8558" r="10.6587" fill="#fff" />
                <circle cx="26.8296" cy="67.4786" r="10.6587" fill="#fff" />
                <circle cx="26.8296" cy="37.3401" r="10.6587" fill="#fff" />
                </svg>
            </div>

            <div class="right-wheel-wrapper">
                <svg
                class="wheel"
                width="134"
                height="134"
                viewBox="0 0 134 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <circle class="main" cx="67.259" cy="67.2586" r="64.7414" stroke="white" stroke-width="4" />
                <circle cx="67.7133" cy="66.8046" r="9.08046" fill="#fff" />
                <circle cx="67.2585" cy="27.3046" r="13.1667" fill="#fff" />
                <circle cx="100.856" cy="46.3736" r="13.1667" fill="#fff" />
                <circle cx="100.856" cy="83.6034" r="13.1667" fill="#fff" />
                <circle cx="67.2585" cy="106.305" r="13.1667" fill="#fff" />
                <circle cx="33.6608" cy="83.6034" r="13.1667" fill="#fff" />
                <circle cx="33.6608" cy="46.3736" r="13.1667" fill="#fff" />
                </svg>
            </div>

            <svg class="camera" width="260" height="143" viewBox="0 0 260 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect class="camera-body" width="200" height="143" rx="10" />
                <path
                class="play"
                d="M125.056 67.0279C128.741 68.8705 128.741 74.1295 125.056 75.9721L86.2361 95.382C82.9116 97.0442 79 94.6267 79 90.9098L79 52.0902C79 48.3733 82.9116 45.9558 86.2361 47.618L125.056 67.0279Z"
                fill="white"
                />
                <path
                class="camera-lens"
                d="M197 46.4445C197 44.523 198.101 42.7715 199.833 41.9386L252.833 16.4472C256.152 14.8506 260 17.2697 260 20.9531L260 121.194C260 124.841 256.222 127.261 252.909 125.736L199.909 101.339C198.136 100.523 197 98.7494 197 96.7973L197 46.4445Z"
                />
            </svg>
            </div>
    `,

  oldLoader: `
             <div class="loader">
            <svg viewBox="0 0 362 264" xmlns="http://www.w3.org/2000/svg">
            <rect width="362" height="264" rx="8" />
            <path
                d="M179.166 137.945C201.134 137.945 218.942 120.137 218.942 98.1689C218.942 76.2013 201.134 58.3931 179.166 58.3931C157.199 58.3931 139.391 76.2013 139.391 98.1689C139.391 120.137 157.199 137.945 179.166 137.945Z"
                fill="#FFB8B8"
            />
            <path
                d="M134.796 59.9041C135.096 55.3364 138.117 50.6623 147.714 48.2198C147.714 48.2198 164.185 27.1585 186.566 38.2033C186.566 38.2033 197.416 36.3366 205.462 47.5943C205.462 47.5943 213.439 42.8896 216.805 51.2287C216.805 51.2287 226.161 68.2384 222.716 85.5884C219.272 102.938 217.509 105.104 217.509 105.104C217.509 105.104 221.899 69.2155 196.612 71.704C171.325 74.1926 150.966 65.2999 145.24 84.7701C140.485 100.937 141.084 109.334 141.084 109.334C141.084 109.334 125.183 93.2057 130.589 80.5058C133.354 74.0104 134.332 66.9484 134.796 59.9041Z"
                fill="#2F2E41"
            />
            <path
                d="M71 263.877H291.011C289.541 247.095 288.58 234.609 288.58 230.387C288.58 211.764 273.342 191.441 273.342 191.441L267.887 188.426L222.337 174.215L210.549 158.903C209.315 157.295 207.725 155.995 205.903 155.106C204.081 154.216 202.078 153.762 200.051 153.777L162.814 154.057C159.538 154.082 156.388 155.33 153.984 157.556L130.925 178.947L97.1059 195.097L97.0484 195.039L96.6952 195.302L91.6761 198.916L88.4477 201.249C88.4477 201.249 79.9785 211.411 73.2097 241.887C72.1911 246.471 71.4764 254.143 71 263.877Z"
                fill="#FD266F"
            />
            <path
                d="M324 53C333.941 53 342 44.9411 342 35C342 25.0589 333.941 17 324 17C314.059 17 306 25.0589 306 35C306 44.9411 314.059 53 324 53Z"
                fill="#FD266F"
            />
            <path
                d="M333.803 34.6645L318.592 26.0519C318.532 26.0179 318.464 26 318.395 26C318.326 26 318.258 26.0179 318.197 26.0519C318.137 26.0859 318.088 26.1348 318.053 26.1937C318.018 26.2526 318 26.3194 318 26.3874V43.6126C318 43.6806 318.018 43.7474 318.053 43.8063C318.088 43.8652 318.137 43.9141 318.197 43.9481C318.258 43.9821 318.326 44 318.395 44C318.464 44 318.532 43.9821 318.592 43.9481L333.803 35.3355C333.863 35.3015 333.912 35.2526 333.947 35.1937C333.982 35.1348 334 35.068 334 35C334 34.932 333.982 34.8652 333.947 34.8063C333.912 34.7475 333.863 34.6986 333.803 34.6646L318.592 26.0519C318.532 26.0179 318.464 26 318.395 26C318.326 26 318.258 26.0179 318.197 26.0519C318.137 26.0859 318.088 26.1348 318.053 26.1937C318.018 26.2526 318 26.3194 318 26.3874V43.6126C318 43.6806 318.018 43.7474 318.053 43.8063C318.088 43.8652 318.137 43.9141 318.197 43.9481C318.258 43.9821 318.326 44 318.395 44C318.464 44 318.532 43.9821 318.592 43.9481L333.803 35.3355C333.863 35.3015 333.912 35.2526 333.947 35.1937C333.982 35.1348 334 35.068 334 35C334 34.932 333.982 34.8652 333.947 34.8063C333.912 34.7474 333.863 34.6985 333.803 34.6645V34.6645Z"
                fill="white"
            />
            </svg>
            <svg viewBox="0 0 362 264" xmlns="http://www.w3.org/2000/svg">
            <rect width="362" height="264" rx="8" />
            <path
                d="M211.995 109.482C223.317 109.482 232.495 100.303 232.495 88.9818C232.495 77.66 223.317 68.4819 211.995 68.4819C200.673 68.4819 191.495 77.66 191.495 88.9818C191.495 100.303 200.673 109.482 211.995 109.482Z"
                fill="#2F2E41"
            />
            <path
                d="M169.882 179.143C198.564 179.143 221.815 155.891 221.815 127.21C221.815 98.528 198.564 75.2769 169.882 75.2769C141.2 75.2769 117.949 98.528 117.949 127.21C117.949 155.891 141.2 179.143 169.882 179.143Z"
                fill="#2F2E41"
            />
            <path
                d="M160.86 182.302C184.167 182.302 203.061 163.407 203.061 140.1C203.061 116.793 184.167 97.8989 160.86 97.8989C137.552 97.8989 118.658 116.793 118.658 140.1C118.658 163.407 137.552 182.302 160.86 182.302Z"
                fill="#9E616A"
            />
            <path
                d="M144.949 87.544C153.147 84.7505 161.945 84.2108 170.423 85.9813C178.901 87.7518 186.747 91.7675 193.142 97.6085C199.537 103.449 204.245 110.901 206.774 119.184C209.303 127.468 209.56 136.279 207.519 144.695C185.356 145.292 162.407 144.416 141.813 131.39L139.407 117.276L133.408 129.529C125.971 130.798 118.612 131.633 112.929 124.941C114.526 116.451 118.324 108.528 123.943 101.965C129.562 95.4027 136.806 90.4299 144.949 87.544Z"
                fill="#2F2E41"
            />
            <path
                d="M242.72 38.8103C257.969 35.5465 274.668 42.3886 283.974 54.902C293.281 67.4153 295.154 84.8257 289.577 99.3891C283.888 114.246 271.603 125.396 260.118 136.403C248.632 147.411 237.069 159.7 233.621 175.231C231.138 186.417 233.192 198.131 239.334 207.805C245.475 217.479 255.202 224.322 266.381 226.834C251.996 229.563 237.013 232.274 222.886 228.426C208.759 224.578 195.839 212.069 196.649 197.45C197.233 186.916 204.424 178.119 210.679 169.623C220.868 155.779 229.35 140.757 235.94 124.881C239.085 117.304 241.835 109.214 240.952 101.057C240.156 94.9817 237.428 89.3227 233.171 84.9148C228.914 80.507 223.354 77.5837 217.31 76.5761L213.537 71.2822C214.796 55.7383 227.471 42.0741 242.72 38.8103Z"
                fill="#2F2E41"
            />
            <path
                d="M257.68 262.822C254.947 234.97 239.504 236.063 239.504 236.063L198.723 228.096L180.861 198.439L136.021 196.69L120.058 224.679L87.2586 228.779L87.2312 229.244C83.9786 229.49 72.2527 232.059 69.902 255.989C69.6834 258.189 69.3827 260.882 69 263.984H257.803C257.762 263.574 257.721 263.191 257.68 262.822Z"
                fill="#2F2E41"
            />
            <path
                d="M324 53C333.941 53 342 44.9411 342 35C342 25.0589 333.941 17 324 17C314.059 17 306 25.0589 306 35C306 44.9411 314.059 53 324 53Z"
                fill="#FD266F"
            />
            <path
                d="M333.803 34.6645L318.592 26.0519C318.532 26.0179 318.464 26 318.395 26C318.326 26 318.258 26.0179 318.197 26.0519C318.137 26.0859 318.088 26.1348 318.053 26.1937C318.018 26.2526 318 26.3194 318 26.3874V43.6126C318 43.6806 318.018 43.7474 318.053 43.8063C318.088 43.8652 318.137 43.9141 318.197 43.9481C318.258 43.9821 318.326 44 318.395 44C318.464 44 318.532 43.9821 318.592 43.9481L333.803 35.3355C333.863 35.3015 333.912 35.2526 333.947 35.1937C333.982 35.1348 334 35.068 334 35C334 34.932 333.982 34.8652 333.947 34.8063C333.912 34.7475 333.863 34.6986 333.803 34.6646L318.592 26.0519C318.532 26.0179 318.464 26 318.395 26C318.326 26 318.258 26.0179 318.197 26.0519C318.137 26.0859 318.088 26.1348 318.053 26.1937C318.018 26.2526 318 26.3194 318 26.3874V43.6126C318 43.6806 318.018 43.7474 318.053 43.8063C318.088 43.8652 318.137 43.9141 318.197 43.9481C318.258 43.9821 318.326 44 318.395 44C318.464 44 318.532 43.9821 318.592 43.9481L333.803 35.3355C333.863 35.3015 333.912 35.2526 333.947 35.1937C333.982 35.1348 334 35.068 334 35C334 34.932 333.982 34.8652 333.947 34.8063C333.912 34.7474 333.863 34.6985 333.803 34.6645V34.6645Z"
                fill="white"
            />
            </svg>
            <svg viewBox="0 0 362 265" xmlns="http://www.w3.org/2000/svg">
            <rect width="362" height="264" rx="8" />
            <path
                d="M175.341 125.913C195.914 125.913 212.591 109.236 212.591 88.6633C212.591 68.0908 195.914 51.4136 175.341 51.4136C154.769 51.4136 138.092 68.0908 138.092 88.6633C138.092 109.236 154.769 125.913 175.341 125.913Z"
                fill="#9E616A"
            />
            <path
                d="M238.102 264.194H144.701L149.943 146.086L150.588 145.408L159.862 135.621H189.354L200.298 146.216L201.161 147.058L224.449 169.373L238.102 264.194Z"
                fill="#FD266F"
            />
            <path
                d="M170.555 264.195H99.5677C99.0983 218.996 98.7266 184.895 98.7266 184.895L102.353 182.688L102.375 182.678L142.188 158.505L150.545 144.928L150.589 145.409L153.046 174.027C153.046 174.027 166.404 217.183 170.555 264.195Z"
                fill="#2F2E41"
            />
            <path
                d="M267.146 264.195H203.979C200.604 248.881 198.845 234.299 199.61 222.142C202.712 172.476 195.558 144.928 198.66 144.928L200.298 146.217L219.784 161.607L245.442 171.012L263.246 177.544L266.348 178.68V180.176C266.359 187.691 266.436 222.589 267.146 264.195Z"
                fill="#2F2E41"
            />
            <path
                d="M140.099 100.317C140.099 100.317 143.264 94.7591 142.529 76.1917C141.793 57.6243 170.066 68.1259 193.692 66.3546C217.318 64.5833 212.317 97.3533 212.317 97.3533C212.317 97.3533 214.021 95.4053 217.67 79.5896C221.319 63.7739 213.034 48.0128 213.034 48.0128C210.594 31.3934 197.442 36.7199 197.442 36.7199C203.776 39.1855 202.559 44.4574 202.559 44.4574C197.198 35.0581 184.047 40.3846 184.047 40.3846C166.507 29.3778 148.731 43.8723 148.731 43.8723C127.541 48.6813 139.968 65.5321 139.968 65.5321C118.659 76.3009 140.099 100.317 140.099 100.317Z"
                fill="#2F2E41"
            />
            <path
                d="M79 264.194C80.8128 227.941 82.2001 199.498 81.6539 197.303C80.1248 191.197 101.697 182.928 102.353 182.688L102.364 182.677H102.375L106.493 184.895L109.507 264.194H79Z"
                fill="#2F2E41"
            />
            <path
                d="M282 264.195H249.942L240.767 173.568L244.546 170.805C244.546 170.805 244.874 170.881 245.442 171.012C248.38 171.744 257.861 174.224 263.246 177.544C264.437 178.217 265.49 179.11 266.348 180.177C266.873 180.804 267.135 181.61 267.08 182.427C266.807 184.993 273.797 221.279 282 264.195Z"
                fill="#2F2E41"
            />
            <path
                d="M324 53C333.941 53 342 44.9411 342 35C342 25.0589 333.941 17 324 17C314.059 17 306 25.0589 306 35C306 44.9411 314.059 53 324 53Z"
                fill="#FD266F"
            />
            <path
                d="M333.803 34.6645L318.592 26.0519C318.532 26.0179 318.464 26 318.395 26C318.326 26 318.258 26.0179 318.197 26.0519C318.137 26.0859 318.088 26.1348 318.053 26.1937C318.018 26.2526 318 26.3194 318 26.3874V43.6126C318 43.6806 318.018 43.7474 318.053 43.8063C318.088 43.8652 318.137 43.9141 318.197 43.9481C318.258 43.9821 318.326 44 318.395 44C318.464 44 318.532 43.9821 318.592 43.9481L333.803 35.3355C333.863 35.3015 333.912 35.2526 333.947 35.1937C333.982 35.1348 334 35.068 334 35C334 34.932 333.982 34.8652 333.947 34.8063C333.912 34.7475 333.863 34.6986 333.803 34.6646L318.592 26.0519C318.532 26.0179 318.464 26 318.395 26C318.326 26 318.258 26.0179 318.197 26.0519C318.137 26.0859 318.088 26.1348 318.053 26.1937C318.018 26.2526 318 26.3194 318 26.3874V43.6126C318 43.6806 318.018 43.7474 318.053 43.8063C318.088 43.8652 318.137 43.9141 318.197 43.9481C318.258 43.9821 318.326 44 318.395 44C318.464 44 318.532 43.9821 318.592 43.9481L333.803 35.3355C333.863 35.3015 333.912 35.2526 333.947 35.1937C333.982 35.1348 334 35.068 334 35C334 34.932 333.982 34.8652 333.947 34.8063C333.912 34.7474 333.863 34.6985 333.803 34.6645V34.6645Z"
                fill="white"
            />
            </svg>
            <svg viewBox="0 0 362 264" xmlns="http://www.w3.org/2000/svg">
            <rect width="362" height="264" rx="8" />
            <path
                d="M151.667 264H225L220.43 194.774L193.975 200.935L168.245 190.946L167.563 190.688L167.52 190.667C167.511 190.687 167.504 190.709 167.499 190.731C167.094 192.376 159.018 225.011 151.667 264Z"
                fill="#2F2E41"
            />
            <path
                d="M106.667 206.414L113.652 264H176.667L168.629 191.373L168.552 190.667L167.934 191.116L167.869 191.159L152.323 202.32L106.667 206.414Z"
                fill="#FD266F"
            />
            <path
                d="M215 264H270.86L271.667 217.888L230.559 204.101L221.334 194C221.334 194 218.419 224.39 215 264Z"
                fill="#FD266F"
            />
            <path
                d="M80 264H126.667L123.675 222.213L107.111 205.667C107.111 205.667 94.0055 233.128 80 264Z"
                fill="#FD266F"
            />
            <path
                d="M256.666 264H281.666C281.556 250.885 281.49 241.824 281.49 239.266C281.615 235.313 280.72 231.392 278.885 227.855C277.05 224.318 274.333 221.275 270.977 219L258.35 223.053L256.666 264Z"
                fill="#FD266F"
            />
            <path
                d="M261.667 172.333H131.667V118.206C131.667 99.6551 144.896 77.3524 161.157 68.4885C183.98 56.0493 208.932 55.8307 229.612 67.8918C239.347 73.586 247.418 81.679 253.037 91.379C258.656 101.079 261.629 112.054 261.667 123.23V172.333Z"
                fill="#2F2E41"
            />
            <path
                d="M239.82 147.304C252.17 124.712 243.867 96.3864 221.275 84.0366C198.683 71.6869 170.358 79.9896 158.008 102.581C145.658 125.173 153.961 153.499 176.553 165.849C199.144 178.198 227.47 169.896 239.82 147.304Z"
                fill="#FFB8B8"
            />
            <path
                d="M243.74 127.334H176.738L176.58 126.57C175.804 122.56 174.802 118.599 173.578 114.704C170.918 118.617 168.464 122.668 166.228 126.84L165.954 127.334H152.929C152.13 127.333 151.339 127.165 150.608 126.84C149.877 126.516 149.222 126.042 148.683 125.449C148.329 125.057 147.5 124.14 150.931 82.0989C151.025 81.0977 151.377 80.1384 151.952 79.3147C152.527 78.4911 153.305 77.8314 154.21 77.4004C183.608 63.6234 213.4 63.988 242.764 78.4894H243.288L243.472 79.2206C249.265 123.968 248.431 124.934 248.076 125.346C247.537 125.97 246.871 126.471 246.123 126.814C245.375 127.156 244.563 127.334 243.74 127.334V127.334Z"
                fill="#2F2E41"
            />
            <path
                d="M324 53C333.941 53 342 44.9411 342 35C342 25.0589 333.941 17 324 17C314.059 17 306 25.0589 306 35C306 44.9411 314.059 53 324 53Z"
                fill="#FD266F"
            />
            <path
                d="M333.803 34.6645L318.592 26.0519C318.532 26.0179 318.464 26 318.395 26C318.326 26 318.258 26.0179 318.197 26.0519C318.137 26.0859 318.088 26.1348 318.053 26.1937C318.018 26.2526 318 26.3194 318 26.3874V43.6126C318 43.6806 318.018 43.7474 318.053 43.8063C318.088 43.8652 318.137 43.9141 318.197 43.9481C318.258 43.9821 318.326 44 318.395 44C318.464 44 318.532 43.9821 318.592 43.9481L333.803 35.3355C333.863 35.3015 333.912 35.2526 333.947 35.1937C333.982 35.1348 334 35.068 334 35C334 34.932 333.982 34.8652 333.947 34.8063C333.912 34.7475 333.863 34.6986 333.803 34.6646L318.592 26.0519C318.532 26.0179 318.464 26 318.395 26C318.326 26 318.258 26.0179 318.197 26.0519C318.137 26.0859 318.088 26.1348 318.053 26.1937C318.018 26.2526 318 26.3194 318 26.3874V43.6126C318 43.6806 318.018 43.7474 318.053 43.8063C318.088 43.8652 318.137 43.9141 318.197 43.9481C318.258 43.9821 318.326 44 318.395 44C318.464 44 318.532 43.9821 318.592 43.9481L333.803 35.3355C333.863 35.3015 333.912 35.2526 333.947 35.1937C333.982 35.1348 334 35.068 334 35C334 34.932 333.982 34.8652 333.947 34.8063C333.912 34.7474 333.863 34.6985 333.803 34.6645V34.6645Z"
                fill="white"
            />
            </svg>
        </div>
    `,

  // SHARE BTNS
  whatsappIcon: `
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              /></svg
          >
    `,

  facebookIcon: `
            <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26px" height="26px">
            <path
              d="M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005 C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21 c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996 C17.465,9.521,17.001,9,16.403,9z"
            />
          </svg>
    `,

  // UPLOADING ANIMATION
  laptopUploadingAnimation: `
            <svg viewBox="0 0 431 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M416.976 300H13.5278C9.94003 300 6.49917 298.575 3.96221 296.038C1.42525 293.501 0 290.06 0 286.472C146.25 269.475 289.751 269.475 430.504 286.472C430.504 290.06 429.079 293.501 426.542 296.038C424.005 298.575 420.564 300 416.976 300Z"
            fill="#C7C6DF"
            />
            <path
            d="M430.504 287.268L0 286.472L49.8939 202.52L50.1326 202.122V17.1008C50.1324 14.855 50.5746 12.6312 51.434 10.5564C52.2933 8.48153 53.5529 6.59628 55.1409 5.00829C56.7289 3.4203 58.6141 2.16066 60.689 1.30134C62.7638 0.442008 64.9876 -0.000187156 67.2334 5.94224e-08H360.883C363.129 -0.000187156 365.353 0.442008 367.428 1.30134C369.502 2.16066 371.388 3.4203 372.976 5.00829C374.564 6.59628 375.823 8.48153 376.683 10.5564C377.542 12.6312 377.984 14.855 377.984 17.1008V203.395L430.504 287.268Z"
            fill="#43434A"
            />
            <path
            class="leptop-screen"
            d="M66.8447 11.9363C65.3679 11.9379 63.952 12.5253 62.9077 13.5696C61.8635 14.6139 61.2761 16.0297 61.2744 17.5066V186.207C61.2761 187.684 61.8635 189.099 62.9078 190.144C63.9521 191.188 65.3679 191.775 66.8447 191.777H363.662C365.138 191.775 366.554 191.188 367.598 190.144C368.643 189.099 369.23 187.684 369.232 186.207V17.5066C369.23 16.0298 368.643 14.6139 367.598 13.5697C366.554 12.5254 365.138 11.938 363.662 11.9363H66.8447Z"
            fill="#DFE6EF"
            />
            <path
            d="M68.0875 214.058C67.6312 214.059 67.1845 214.19 66.8003 214.436C66.416 214.682 66.1101 215.033 65.9186 215.448L50.5448 248.869C50.3774 249.233 50.3042 249.633 50.3319 250.032C50.3596 250.432 50.4873 250.818 50.7033 251.155C50.9192 251.492 51.2165 251.769 51.5677 251.962C51.919 252.154 52.3129 252.254 52.7133 252.254H376.017C376.424 252.254 376.824 252.15 377.18 251.952C377.535 251.754 377.834 251.468 378.048 251.122C378.262 250.776 378.384 250.381 378.402 249.974C378.42 249.568 378.334 249.163 378.152 248.799L361.441 215.378C361.244 214.98 360.94 214.646 360.562 214.413C360.185 214.18 359.75 214.057 359.306 214.058H68.0875Z"
            fill="#67657D"
            />
            <path
            d="M214.057 9.15118C216.035 9.15118 217.638 7.54795 217.638 5.57028C217.638 3.5926 216.035 1.98938 214.057 1.98938C212.08 1.98938 210.477 3.5926 210.477 5.57028C210.477 7.54795 212.08 9.15118 214.057 9.15118Z"
            fill="white"
            />
            <path
            d="M182.28 258.62C181.755 258.621 181.245 258.794 180.828 259.114C180.412 259.433 180.112 259.88 179.975 260.387L176.118 274.71C176.023 275.064 176.01 275.435 176.081 275.795C176.153 276.154 176.306 276.492 176.528 276.783C176.751 277.074 177.038 277.31 177.367 277.472C177.695 277.634 178.057 277.718 178.423 277.718H251.763C252.144 277.718 252.519 277.628 252.857 277.453C253.195 277.279 253.487 277.026 253.707 276.716C253.928 276.406 254.071 276.047 254.126 275.671C254.18 275.294 254.143 274.91 254.018 274.55L249.06 260.227C248.898 259.758 248.593 259.351 248.189 259.063C247.784 258.775 247.301 258.621 246.804 258.62H182.28Z"
            fill="#67657D"
            />
            <path d="M377.983 199.337V202.52H49.8926L50.1395 202.122V199.337H377.983Z" fill="#C7C6DF" />
        </svg>
    `,

  videoUploadingAnimation: `
            <svg class="video-1" width="150" height="182" viewBox="0 0 150 182" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_1756_77)">
            <rect class="applicant-video" y="32" width="150" height="150" rx="4" fill="#83BDE3" />
            </g>
            <path
            d="M88.9291 88.6306C93.99 88.6306 98.0926 84.5693 98.0926 79.5594C98.0926 74.5496 93.99 70.4883 88.9291 70.4883C83.8683 70.4883 79.7656 74.5496 79.7656 79.5594C79.7656 84.5693 83.8683 88.6306 88.9291 88.6306Z"
            fill="#E4CBCE"
            />
            <path
            d="M70.0961 119.456C82.9169 119.456 93.3103 109.168 93.3103 96.476C93.3103 83.7844 82.9169 73.4957 70.0961 73.4957C57.2752 73.4957 46.8818 83.7844 46.8818 96.476C46.8818 109.168 57.2752 119.456 70.0961 119.456Z"
            fill="#D7BC88"
            />
            <path
            d="M66.0497 120.854C76.4681 120.854 84.9139 112.493 84.9139 102.18C84.9139 91.8663 76.4681 83.5056 66.0497 83.5056C55.6313 83.5056 47.1855 91.8663 47.1855 102.18C47.1855 112.493 55.6313 120.854 66.0497 120.854Z"
            fill="#DC9D9D"
            />
            <path
            d="M58.9421 78.9241C62.6066 77.688 66.5393 77.4492 70.329 78.2326C74.1187 79.0161 77.6261 80.793 80.4846 83.3776C83.3431 85.9622 85.4476 89.2596 86.5782 92.925C87.7087 96.5904 87.8237 100.489 86.9111 104.214C77.0041 104.478 66.7458 104.09 57.5403 98.326L56.4649 92.0803L53.7833 97.5024C50.4589 98.0638 47.1693 98.4337 44.6289 95.4724C45.3429 91.7153 47.0407 88.2095 49.5524 85.3055C52.0642 82.4016 55.302 80.2011 58.9421 78.9241Z"
            fill="#D7BC88"
            />
            <path
            d="M102.655 57.3586C109.471 55.9143 116.936 58.942 121.096 64.4791C125.256 70.0162 126.093 77.7204 123.6 84.1647C121.057 90.7388 115.566 95.6725 110.432 100.543C105.297 105.414 100.129 110.852 98.5876 117.725C97.4776 122.674 98.3959 127.858 101.141 132.139C103.886 136.419 108.234 139.447 113.232 140.559C106.801 141.766 100.104 142.966 93.7889 141.264C87.4741 139.561 81.6988 134.026 82.0611 127.557C82.3221 122.895 85.5363 119.003 88.3323 115.243C92.887 109.117 96.6784 102.47 99.6243 95.4448C101.03 92.0918 102.259 88.512 101.864 84.9029C101.509 82.2144 100.289 79.7103 98.3865 77.7598C96.4837 75.8093 93.9981 74.5158 91.2963 74.0699L89.6101 71.7274C90.1726 64.8492 95.8384 58.8028 102.655 57.3586Z"
            fill="#D7BC88"
            />
            <path
            d="M109.341 156.485C108.119 144.16 101.216 144.644 101.216 144.644L82.9868 141.118L75.0023 127.995L54.9586 127.221L47.8233 139.606L33.1617 141.42L33.1494 141.626C31.6955 141.735 26.454 142.872 25.4032 153.461C25.3055 154.434 25.1711 155.626 25 156.999H109.396C109.378 156.817 109.359 156.648 109.341 156.485Z"
            fill="#2F2E41"
            />
            <path
            d="M23 49.2679C24.3333 50.0378 24.3333 51.9623 23 52.7321L9.5 60.5263C8.16667 61.2961 6.5 60.3338 6.5 58.7942L6.5 43.2058C6.5 41.6662 8.16667 40.7039 9.5 41.4737L23 49.2679Z"
            fill="white"
            />
            <rect x="36" y="15" width="76" height="6" rx="2" fill="#D4D2DE" />
            <rect x="36" y="5" width="44" height="6" rx="2" fill="#B7B5C2" />
            <circle cx="12.5" cy="12.5" r="12.5" fill="#83BDE3" />
            <defs>
            <filter
                id="filter0_i_1756_77"
                x="-1"
                y="32"
                width="151"
                height="151"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                />
                <feOffset dx="-3" dy="3" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.725139 0 0 0 0 0.858475 0 0 0 0 0.945833 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1756_77" />
            </filter>
            </defs>
        </svg>
        <svg
            class="video-2" width="150" height="182" viewBox="0 0 150 182" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_1756_76)">
            <rect class="applicant-video" y="32" width="150" height="150" rx="4" fill="#F6C6B7" />
            </g>
            <path
            d="M23 49.2679C24.3333 50.0378 24.3333 51.9623 23 52.7321L9.5 60.5263C8.16667 61.2961 6.5 60.3338 6.5 58.7942L6.5 43.2058C6.5 41.6662 8.16667 40.7039 9.5 41.4737L23 49.2679Z"
            fill="white"
            />
            <rect x="36" y="15" width="76" height="6" rx="2" fill="#D4D2DE" />
            <rect x="36" y="5" width="44" height="6" rx="2" fill="#B7B5C2" />
            <circle cx="12.5" cy="12.5" r="12.5" fill="#F6C6B7" />
            <path
            d="M60.4512 157H97.1511L94.8638 123.264L81.6244 126.267L68.7478 121.399L68.4064 121.273L68.3851 121.262C68.3805 121.272 68.3769 121.283 68.3744 121.294C68.1718 122.096 64.1302 137.999 60.4512 157Z"
            fill="#2F2E41"
            />
            <path
            d="M38.3359 128.772L41.7643 157H72.6954L68.7501 121.399L68.7123 121.052L68.4089 121.272L68.3768 121.294L60.7462 126.765L38.3359 128.772Z"
            fill="#E4CBCE"
            />
            <path
            d="M91.7246 157H119.424L119.824 134.777L99.4399 128.132L94.8652 123.264C94.8652 123.264 93.4201 137.91 91.7246 157Z"
            fill="#E4CBCE"
            />
            <path
            d="M25 157H47.9543L46.4825 136.778L38.3354 128.771C38.3354 128.771 31.889 142.06 25 157Z"
            fill="#E4CBCE"
            />
            <path
            d="M112.891 157H125C124.946 150.523 124.914 146.048 124.914 144.785C124.975 142.833 124.541 140.896 123.653 139.15C122.764 137.403 121.448 135.9 119.822 134.776L113.706 136.778L112.891 157Z"
            fill="#E4CBCE"
            />
            <path
            d="M114.782 112.648H50.6182V86.0707C50.6182 76.9622 57.1477 66.0113 65.1735 61.659C76.4383 55.5512 88.7535 55.4439 98.9608 61.366C103.765 64.1619 107.749 68.1357 110.522 72.8985C113.296 77.6613 114.763 83.0501 114.782 88.5375V112.648Z"
            fill="#2F2E41"
            />
            <path
            d="M104.306 100.142C110.445 89.1042 106.318 75.2653 95.0866 69.2317C83.8557 63.1981 69.7743 67.2545 63.6349 78.2919C57.4955 89.3294 61.623 103.168 72.8539 109.202C84.0849 115.235 98.1663 111.179 104.306 100.142Z"
            fill="#9E616A"
            />
            <path
            d="M105.999 90.3923H72.936L72.8576 90.0233C72.475 88.0864 71.9805 86.1725 71.3766 84.2908C70.0636 86.1812 68.8528 88.1382 67.7493 90.1537L67.6145 90.3923H61.1868C60.7924 90.3919 60.4024 90.3108 60.0417 90.154C59.681 89.9972 59.3575 89.7682 59.0918 89.4817C58.917 89.2924 58.5078 88.8496 60.2008 68.5393C60.2474 68.0557 60.4211 67.5922 60.7047 67.1943C60.9884 66.7964 61.3723 66.4777 61.8189 66.2695C76.3261 59.6138 91.0272 59.7899 105.517 66.7956H105.776L105.867 67.1488C108.725 88.7663 108.314 89.2331 108.138 89.4324C107.873 89.7338 107.544 89.9755 107.175 90.1411C106.806 90.3067 106.405 90.3924 105.999 90.3923V90.3923Z"
            fill="#2F2E41"
            />
            <defs>
            <filter
                id="filter0_i_1756_76"
                x="-1"
                y="32"
                width="151"
                height="151"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                />
                <feOffset dx="-3" dy="3" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.945833 0 0 0 0 0.864762 0 0 0 0 0.839427 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1756_76" />
            </filter>
            </defs>
        </svg>
        <svg
            class="video-3" width="150" height="182" viewBox="0 0 150 182" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_1756_75)">
            <rect class="applicant-video" y="32" width="150" height="150" rx="4" fill="#FDBA5F" />
            </g>
            <path
            d="M23 49.2679C24.3333 50.0378 24.3333 51.9623 23 52.7321L9.5 60.5263C8.16667 61.2961 6.5 60.3338 6.5 58.7942L6.5 43.2058C6.5 41.6662 8.16667 40.7039 9.5 41.4737L23 49.2679Z"
            fill="white"
            />
            <rect x="36" y="15" width="76" height="6" rx="2" fill="#D4D2DE" />
            <rect x="36" y="5" width="44" height="6" rx="2" fill="#B7B5C2" />
            <circle cx="12.5" cy="12.5" r="12.5" fill="#FDBA5F" />
            <path
            d="M74.4626 109.665C85.3172 109.665 94.1165 99.907 94.1165 87.8695C94.1165 75.8319 85.3172 66.0736 74.4626 66.0736C63.608 66.0736 54.8086 75.8319 54.8086 87.8695C54.8086 99.907 63.608 109.665 74.4626 109.665Z"
            fill="#FFC8D0"
            />
            <path
            d="M103.236 156.997H59.6602L61.0839 121.469L61.4227 121.075L66.3135 115.344H81.8743L87.6425 121.54L88.1077 122.041L100.389 135.094L103.236 156.997Z"
            fill="#504F63"
            />
            <path
            d="M67.1546 156.999H34.187C34.1058 148.979 34.0605 144.177 34.0605 144.177L35.9678 142.889L35.9768 142.884H35.9815L56.9897 128.739L61.401 120.794L61.4237 121.075L62.7209 137.821C62.7209 137.821 64.8631 145.5 67.1546 156.999Z"
            fill="#2F2E41"
            />
            <path
            d="M122.554 156.999H87.6339C88.1627 133.611 85.3153 120.794 86.7798 120.794L87.6339 121.541L97.9256 130.553L111.49 136.072H111.499L120.85 139.876L122.491 140.543V141.4C122.496 143.455 122.505 149.074 122.554 156.999Z"
            fill="#2F2E41"
            />
            <path
            d="M55.8795 94.6882C55.8795 94.6882 57.5493 91.4361 57.1611 80.5717C56.7729 69.7074 71.6909 75.8521 84.1565 74.8157C96.622 73.7793 93.9833 92.954 93.9833 92.954C93.9833 92.954 94.8826 91.8142 96.808 82.5599C98.7334 73.3055 94.3617 64.0833 94.3617 64.0833C93.0741 54.3588 86.1353 57.4756 86.1353 57.4756C87.0123 57.7228 87.7749 58.3236 88.2741 59.1607C88.7733 59.9978 88.9733 61.0111 88.8351 62.003C86.0065 56.5031 79.0674 59.6198 79.0674 59.6198C69.8129 53.1794 60.4335 61.6606 60.4335 61.6606C49.2536 64.4745 55.8101 74.3344 55.8101 74.3344C44.5669 80.6356 55.8795 94.6882 55.8795 94.6882Z"
            fill="#936F6A"
            />
            <path
            d="M38.5782 156.998H25.0321C25.1378 155.147 25.1408 153.291 25.0412 151.439C24.2321 147.866 35.6132 143.034 35.9566 142.888L35.9656 142.883H35.9703L38.1398 144.177L38.5782 156.998Z"
            fill="#2F2E41"
            />
            <path
            d="M125.001 157H110.772L108.996 137.552L110.989 135.938C110.989 135.938 111.17 135.983 111.491 136.073H111.5C114.751 136.893 117.894 138.171 120.852 139.877C121.479 140.268 122.036 140.785 122.492 141.401C122.772 141.773 122.911 142.251 122.881 142.734C122.809 143.461 123.64 148.815 125.001 157Z"
            fill="#2F2E41"
            />
            <defs>
            <filter
                id="filter0_i_1756_75"
                x="-1"
                y="32"
                width="151"
                height="151"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
            >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                />
                <feOffset dx="-3" dy="3" />
                <feGaussianBlur stdDeviation="0.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.821545 0 0 0 0 0.579167 0 0 0 1 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1756_75" />
            </filter>
            </defs>
        </svg>
    `,

  // VIDEO LOADER
  videoLoader: `
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" />
         </svg>
    `,

  // VIDEO PLAYER
  playPauseAnimationIcons: `
        <svg class="play" width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M0 38.5V72.0279C0 75.0014 3.12925 76.9354 5.78885 75.6056L72.8446 42.0777C75.7928 40.6036 75.7928 36.3964 72.8446 34.9223L5.78886 1.39443C3.12926 0.064628 0 1.99861 0 4.97214V38.5Z"
        fill="white"
        />
    </svg>
    <svg class="pause" width="60" height="80" viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" width="20" height="80" rx="4" fill="white" />
        <rect width="20" height="80" rx="4" fill="white" />
    </svg>
    `,

  // MEDIA CHECK
  faceHelperMediaCheck: `
            <svg viewBox="0 0 859 527">
            <line x1="5" y1="2.5" x2="153" y2="2.5" />
            <line x1="7.5" y1="5" x2="7.49999" y2="177" />
            <line x1="856.5" y1="5" x2="856.5" y2="177" />
            <line x1="854" y1="7.5" x2="706" y2="7.49999" />
            <line x1="854" y1="524.5" x2="706" y2="524.5" />
            <line x1="851.5" y1="522" x2="851.5" y2="350" />
            <line x1="2.5" y1="522" x2="2.49999" y2="350" />
            <line x1="5" y1="519.5" x2="153" y2="519.5" />
        </svg>
    `,
};

export function getSvg(svgName, width, height) {
  if (typeof SVG_ICONS[svgName] === "function") {
    return SVG_ICONS[svgName](width, height) || "";
  }
  return SVG_ICONS[svgName] || "";
}
