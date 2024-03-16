import React, { ReactElement } from 'react';

const ScottyLabsTitle = ({
	className,
}: {
	className: string;
}): ReactElement => {
	return (
		<div className={className}>
			<svg
				width="504"
				height="46"
				viewBox="0 0 504 46"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M25.112 2.496V7.92H16.184V36H9.464V7.92H0.536V2.496H25.112ZM28.2871 22.608C28.2871 19.92 28.8151 17.536 29.8711 15.456C30.9591 13.376 32.4151 11.776 34.2391 10.656C36.0951 9.536 38.1591 8.976 40.4311 8.976C42.4151 8.976 44.1431 9.376 45.6151 10.176C47.1191 10.976 48.3191 11.984 49.2151 13.2V9.408H55.9831V36H49.2151V32.112C48.3511 33.36 47.1511 34.4 45.6151 35.232C44.1111 36.032 42.3671 36.432 40.3831 36.432C38.1431 36.432 36.0951 35.856 34.2391 34.704C32.4151 33.552 30.9591 31.936 29.8711 29.856C28.8151 27.744 28.2871 25.328 28.2871 22.608ZM49.2151 22.704C49.2151 21.072 48.8951 19.68 48.2551 18.528C47.6151 17.344 46.7511 16.448 45.6631 15.84C44.5751 15.2 43.4071 14.88 42.1591 14.88C40.9111 14.88 39.7591 15.184 38.7031 15.792C37.6471 16.4 36.7831 17.296 36.1111 18.48C35.4711 19.632 35.1511 21.008 35.1511 22.608C35.1511 24.208 35.4711 25.616 36.1111 26.832C36.7831 28.016 37.6471 28.928 38.7031 29.568C39.7911 30.208 40.9431 30.528 42.1591 30.528C43.4071 30.528 44.5751 30.224 45.6631 29.616C46.7511 28.976 47.6151 28.08 48.2551 26.928C48.8951 25.744 49.2151 24.336 49.2151 22.704ZM69.2664 13.536C70.1304 12.128 71.2504 11.024 72.6264 10.224C74.0344 9.424 75.6344 9.024 77.4264 9.024V16.08H75.6504C73.5384 16.08 71.9384 16.576 70.8504 17.568C69.7944 18.56 69.2664 20.288 69.2664 22.752V36H62.5464V9.408H69.2664V13.536ZM89.7766 14.928V27.792C89.7766 28.688 89.9846 29.344 90.4006 29.76C90.8486 30.144 91.5846 30.336 92.6086 30.336H95.7286V36H91.5046C85.8406 36 83.0086 33.248 83.0086 27.744V14.928H79.8406V9.408H83.0086V2.832H89.7766V9.408H95.7286V14.928H89.7766ZM98.834 22.608C98.834 19.92 99.362 17.536 100.418 15.456C101.506 13.376 102.962 11.776 104.786 10.656C106.642 9.536 108.706 8.976 110.978 8.976C112.962 8.976 114.69 9.376 116.162 10.176C117.666 10.976 118.866 11.984 119.762 13.2V9.408H126.53V36H119.762V32.112C118.898 33.36 117.698 34.4 116.162 35.232C114.658 36.032 112.914 36.432 110.93 36.432C108.69 36.432 106.642 35.856 104.786 34.704C102.962 33.552 101.506 31.936 100.418 29.856C99.362 27.744 98.834 25.328 98.834 22.608ZM119.762 22.704C119.762 21.072 119.442 19.68 118.802 18.528C118.162 17.344 117.298 16.448 116.21 15.84C115.122 15.2 113.954 14.88 112.706 14.88C111.458 14.88 110.306 15.184 109.25 15.792C108.194 16.4 107.33 17.296 106.658 18.48C106.018 19.632 105.698 21.008 105.698 22.608C105.698 24.208 106.018 25.616 106.658 26.832C107.33 28.016 108.194 28.928 109.25 29.568C110.338 30.208 111.49 30.528 112.706 30.528C113.954 30.528 115.122 30.224 116.21 29.616C117.298 28.976 118.162 28.08 118.802 26.928C119.442 25.744 119.762 24.336 119.762 22.704ZM147.829 9.024C150.997 9.024 153.557 10.032 155.509 12.048C157.461 14.032 158.437 16.816 158.437 20.4V36H151.717V21.312C151.717 19.2 151.189 17.584 150.133 16.464C149.077 15.312 147.637 14.736 145.813 14.736C143.957 14.736 142.485 15.312 141.397 16.464C140.341 17.584 139.813 19.2 139.813 21.312V36H133.093V9.408H139.813V12.72C140.709 11.568 141.845 10.672 143.221 10.032C144.629 9.36 146.165 9.024 147.829 9.024ZM179.804 9.024C181.82 9.024 183.612 9.472 185.18 10.368C186.748 11.232 187.964 12.528 188.828 14.256C189.724 15.952 190.172 18 190.172 20.4V36H183.452V21.312C183.452 19.2 182.924 17.584 181.868 16.464C180.812 15.312 179.372 14.736 177.548 14.736C175.692 14.736 174.22 15.312 173.132 16.464C172.076 17.584 171.548 19.2 171.548 21.312V36H164.828V0.48H171.548V12.72C172.412 11.568 173.564 10.672 175.004 10.032C176.444 9.36 178.044 9.024 179.804 9.024ZM194.834 22.608C194.834 19.92 195.362 17.536 196.418 15.456C197.506 13.376 198.962 11.776 200.786 10.656C202.642 9.536 204.706 8.976 206.978 8.976C208.962 8.976 210.69 9.376 212.162 10.176C213.666 10.976 214.866 11.984 215.762 13.2V9.408H222.53V36H215.762V32.112C214.898 33.36 213.698 34.4 212.162 35.232C210.658 36.032 208.914 36.432 206.93 36.432C204.69 36.432 202.642 35.856 200.786 34.704C198.962 33.552 197.506 31.936 196.418 29.856C195.362 27.744 194.834 25.328 194.834 22.608ZM215.762 22.704C215.762 21.072 215.442 19.68 214.802 18.528C214.162 17.344 213.298 16.448 212.21 15.84C211.122 15.2 209.954 14.88 208.706 14.88C207.458 14.88 206.306 15.184 205.25 15.792C204.194 16.4 203.33 17.296 202.658 18.48C202.018 19.632 201.698 21.008 201.698 22.608C201.698 24.208 202.018 25.616 202.658 26.832C203.33 28.016 204.194 28.928 205.25 29.568C206.338 30.208 207.49 30.528 208.706 30.528C209.954 30.528 211.122 30.224 212.21 29.616C213.298 28.976 214.162 28.08 214.802 26.928C215.442 25.744 215.762 24.336 215.762 22.704ZM227.365 22.704C227.365 19.952 227.925 17.552 229.045 15.504C230.165 13.424 231.717 11.824 233.701 10.704C235.685 9.552 237.957 8.976 240.517 8.976C243.813 8.976 246.533 9.808 248.677 11.472C250.853 13.104 252.309 15.408 253.045 18.384H245.797C245.413 17.232 244.757 16.336 243.829 15.696C242.933 15.024 241.813 14.688 240.469 14.688C238.549 14.688 237.029 15.392 235.909 16.8C234.789 18.176 234.229 20.144 234.229 22.704C234.229 25.232 234.789 27.2 235.909 28.608C237.029 29.984 238.549 30.672 240.469 30.672C243.189 30.672 244.965 29.456 245.797 27.024H253.045C252.309 29.904 250.853 32.192 248.677 33.888C246.501 35.584 243.781 36.432 240.517 36.432C237.957 36.432 235.685 35.872 233.701 34.752C231.717 33.6 230.165 32 229.045 29.952C227.925 27.872 227.365 25.456 227.365 22.704ZM273.712 36L264.688 24.672V36H257.968V0.48H264.688V20.688L273.616 9.408H282.352L270.64 22.752L282.448 36H273.712ZM296.176 36.432C294 36.432 292.048 36.048 290.32 35.28C288.592 34.48 287.216 33.408 286.192 32.064C285.2 30.72 284.656 29.232 284.56 27.6H291.328C291.456 28.624 291.952 29.472 292.816 30.144C293.712 30.816 294.816 31.152 296.128 31.152C297.408 31.152 298.4 30.896 299.104 30.384C299.84 29.872 300.208 29.216 300.208 28.416C300.208 27.552 299.76 26.912 298.864 26.496C298 26.048 296.608 25.568 294.688 25.056C292.704 24.576 291.072 24.08 289.792 23.568C288.544 23.056 287.456 22.272 286.528 21.216C285.632 20.16 285.184 18.736 285.184 16.944C285.184 15.472 285.6 14.128 286.432 12.912C287.296 11.696 288.512 10.736 290.08 10.032C291.68 9.328 293.552 8.976 295.696 8.976C298.864 8.976 301.392 9.776 303.28 11.376C305.168 12.944 306.208 15.072 306.4 17.76H299.968C299.872 16.704 299.424 15.872 298.624 15.264C297.856 14.624 296.816 14.304 295.504 14.304C294.288 14.304 293.344 14.528 292.672 14.976C292.032 15.424 291.712 16.048 291.712 16.848C291.712 17.744 292.16 18.432 293.056 18.912C293.952 19.36 295.344 19.824 297.232 20.304C299.152 20.784 300.736 21.28 301.984 21.792C303.232 22.304 304.304 23.104 305.2 24.192C306.128 25.248 306.608 26.656 306.64 28.416C306.64 29.952 306.208 31.328 305.344 32.544C304.512 33.76 303.296 34.72 301.696 35.424C300.128 36.096 298.288 36.432 296.176 36.432Z"
					fill="#F3964A"
				/>
				<path
					d="M324.553 36.252C322.873 36.252 321.361 35.964 320.017 35.388C318.673 34.788 317.617 33.948 316.849 32.868C316.081 31.788 315.697 30.528 315.697 29.088H320.089C320.185 30.168 320.605 31.056 321.349 31.752C322.117 32.448 323.185 32.796 324.553 32.796C325.969 32.796 327.073 32.46 327.865 31.788C328.657 31.092 329.053 30.204 329.053 29.124C329.053 28.284 328.801 27.6 328.297 27.072C327.817 26.544 327.205 26.136 326.461 25.848C325.741 25.56 324.733 25.248 323.437 24.912C321.805 24.48 320.473 24.048 319.441 23.616C318.433 23.16 317.569 22.464 316.849 21.528C316.129 20.592 315.769 19.344 315.769 17.784C315.769 16.344 316.129 15.084 316.849 14.004C317.569 12.924 318.577 12.096 319.873 11.52C321.169 10.944 322.669 10.656 324.373 10.656C326.797 10.656 328.777 11.268 330.313 12.492C331.873 13.692 332.737 15.348 332.905 17.46H328.369C328.297 16.548 327.865 15.768 327.073 15.12C326.281 14.472 325.237 14.148 323.941 14.148C322.765 14.148 321.805 14.448 321.061 15.048C320.317 15.648 319.945 16.512 319.945 17.64C319.945 18.408 320.173 19.044 320.629 19.548C321.109 20.028 321.709 20.412 322.429 20.7C323.149 20.988 324.133 21.3 325.381 21.636C327.037 22.092 328.381 22.548 329.413 23.004C330.469 23.46 331.357 24.168 332.077 25.128C332.821 26.064 333.193 27.324 333.193 28.908C333.193 30.18 332.845 31.38 332.149 32.508C331.477 33.636 330.481 34.548 329.161 35.244C327.865 35.916 326.329 36.252 324.553 36.252ZM336.668 26.064C336.668 24.024 337.076 22.236 337.892 20.7C338.732 19.14 339.884 17.94 341.348 17.1C342.812 16.26 344.492 15.84 346.388 15.84C348.788 15.84 350.768 16.416 352.328 17.568C353.912 18.696 354.98 20.316 355.532 22.428H351.104C350.744 21.444 350.168 20.676 349.376 20.124C348.584 19.572 347.588 19.296 346.388 19.296C344.708 19.296 343.364 19.896 342.356 21.096C341.372 22.272 340.88 23.928 340.88 26.064C340.88 28.2 341.372 29.868 342.356 31.068C343.364 32.268 344.708 32.868 346.388 32.868C348.764 32.868 350.336 31.824 351.104 29.736H355.532C354.956 31.752 353.876 33.36 352.292 34.56C350.708 35.736 348.74 36.324 346.388 36.324C344.492 36.324 342.812 35.904 341.348 35.064C339.884 34.2 338.732 33 337.892 31.464C337.076 29.904 336.668 28.104 336.668 26.064ZM368.226 36.324C366.354 36.324 364.662 35.904 363.15 35.064C361.638 34.2 360.45 33 359.586 31.464C358.722 29.904 358.29 28.104 358.29 26.064C358.29 24.048 358.734 22.26 359.622 20.7C360.51 19.14 361.722 17.94 363.258 17.1C364.794 16.26 366.51 15.84 368.406 15.84C370.302 15.84 372.018 16.26 373.554 17.1C375.09 17.94 376.302 19.14 377.19 20.7C378.078 22.26 378.522 24.048 378.522 26.064C378.522 28.08 378.066 29.868 377.154 31.428C376.242 32.988 374.994 34.2 373.41 35.064C371.85 35.904 370.122 36.324 368.226 36.324ZM368.226 32.76C369.282 32.76 370.266 32.508 371.178 32.004C372.114 31.5 372.87 30.744 373.446 29.736C374.022 28.728 374.31 27.504 374.31 26.064C374.31 24.624 374.034 23.412 373.482 22.428C372.93 21.42 372.198 20.664 371.286 20.16C370.374 19.656 369.39 19.404 368.334 19.404C367.278 19.404 366.294 19.656 365.382 20.16C364.494 20.664 363.786 21.42 363.258 22.428C362.73 23.412 362.466 24.624 362.466 26.064C362.466 28.2 363.006 29.856 364.086 31.032C365.19 32.184 366.57 32.76 368.226 32.76ZM387.367 19.512V30.492C387.367 31.236 387.535 31.776 387.871 32.112C388.231 32.424 388.831 32.58 389.671 32.58H392.191V36H388.951C387.103 36 385.687 35.568 384.703 34.704C383.719 33.84 383.227 32.436 383.227 30.492V19.512H380.887V16.164H383.227V11.232H387.367V16.164H392.191V19.512H387.367ZM400.761 19.512V30.492C400.761 31.236 400.929 31.776 401.265 32.112C401.625 32.424 402.225 32.58 403.065 32.58H405.585V36H402.345C400.497 36 399.081 35.568 398.097 34.704C397.113 33.84 396.621 32.436 396.621 30.492V19.512H394.281V16.164H396.621V11.232H400.761V16.164H405.585V19.512H400.761ZM427.224 16.164L415.056 45.324H410.808L414.84 35.676L407.028 16.164H411.6L417.18 31.284L422.976 16.164H427.224ZM434.425 9.36V36H430.321V9.36H434.425ZM438.445 25.992C438.445 24 438.853 22.236 439.669 20.7C440.509 19.164 441.637 17.976 443.053 17.136C444.493 16.272 446.077 15.84 447.805 15.84C449.365 15.84 450.721 16.152 451.873 16.776C453.049 17.376 453.985 18.132 454.681 19.044V16.164H458.821V36H454.681V33.048C453.985 33.984 453.037 34.764 451.837 35.388C450.637 36.012 449.269 36.324 447.733 36.324C446.029 36.324 444.469 35.892 443.053 35.028C441.637 34.14 440.509 32.916 439.669 31.356C438.853 29.772 438.445 27.984 438.445 25.992ZM454.681 26.064C454.681 24.696 454.393 23.508 453.817 22.5C453.265 21.492 452.533 20.724 451.621 20.196C450.709 19.668 449.725 19.404 448.669 19.404C447.613 19.404 446.629 19.668 445.717 20.196C444.805 20.7 444.061 21.456 443.485 22.464C442.933 23.448 442.657 24.624 442.657 25.992C442.657 27.36 442.933 28.56 443.485 29.592C444.061 30.624 444.805 31.416 445.717 31.968C446.653 32.496 447.637 32.76 448.669 32.76C449.725 32.76 450.709 32.496 451.621 31.968C452.533 31.44 453.265 30.672 453.817 29.664C454.393 28.632 454.681 27.432 454.681 26.064ZM468.316 19.116C469.012 18.156 469.96 17.376 471.16 16.776C472.384 16.152 473.74 15.84 475.228 15.84C476.98 15.84 478.564 16.26 479.98 17.1C481.396 17.94 482.512 19.14 483.328 20.7C484.144 22.236 484.552 24 484.552 25.992C484.552 27.984 484.144 29.772 483.328 31.356C482.512 32.916 481.384 34.14 479.944 35.028C478.528 35.892 476.956 36.324 475.228 36.324C473.692 36.324 472.324 36.024 471.124 35.424C469.948 34.824 469.012 34.056 468.316 33.12V36H464.212V9.36H468.316V19.116ZM480.376 25.992C480.376 24.624 480.088 23.448 479.512 22.464C478.96 21.456 478.216 20.7 477.28 20.196C476.368 19.668 475.384 19.404 474.328 19.404C473.296 19.404 472.312 19.668 471.376 20.196C470.464 20.724 469.72 21.492 469.144 22.5C468.592 23.508 468.316 24.696 468.316 26.064C468.316 27.432 468.592 28.632 469.144 29.664C469.72 30.672 470.464 31.44 471.376 31.968C472.312 32.496 473.296 32.76 474.328 32.76C475.384 32.76 476.368 32.496 477.28 31.968C478.216 31.416 478.96 30.624 479.512 29.592C480.088 28.56 480.376 27.36 480.376 25.992ZM495.81 36.324C494.25 36.324 492.846 36.048 491.598 35.496C490.374 34.92 489.402 34.152 488.682 33.192C487.962 32.208 487.578 31.116 487.53 29.916H491.778C491.85 30.756 492.246 31.464 492.966 32.04C493.71 32.592 494.634 32.868 495.738 32.868C496.89 32.868 497.778 32.652 498.402 32.22C499.05 31.764 499.374 31.188 499.374 30.492C499.374 29.748 499.014 29.196 498.294 28.836C497.598 28.476 496.482 28.08 494.946 27.648C493.458 27.24 492.246 26.844 491.31 26.46C490.374 26.076 489.558 25.488 488.862 24.696C488.19 23.904 487.854 22.86 487.854 21.564C487.854 20.508 488.166 19.548 488.79 18.684C489.414 17.796 490.302 17.1 491.454 16.596C492.63 16.092 493.974 15.84 495.486 15.84C497.742 15.84 499.554 16.416 500.922 17.568C502.314 18.696 503.058 20.244 503.154 22.212H499.05C498.978 21.324 498.618 20.616 497.97 20.088C497.322 19.56 496.446 19.296 495.342 19.296C494.262 19.296 493.434 19.5 492.858 19.908C492.282 20.316 491.994 20.856 491.994 21.528C491.994 22.056 492.186 22.5 492.57 22.86C492.954 23.22 493.422 23.508 493.974 23.724C494.526 23.916 495.342 24.168 496.422 24.48C497.862 24.864 499.038 25.26 499.95 25.668C500.886 26.052 501.69 26.628 502.362 27.396C503.034 28.164 503.382 29.184 503.406 30.456C503.406 31.584 503.094 32.592 502.47 33.48C501.846 34.368 500.958 35.064 499.806 35.568C498.678 36.072 497.346 36.324 495.81 36.324Z"
					fill="#F7C062"
				/>
			</svg>
		</div>
	);
};

export default ScottyLabsTitle;
