import React from "react"

import IconLink from "./iconlink"

const GitHubIconLink = ({ style, color, colorHover }) => {
  return (
    <IconLink
      style={style}
      color={color}
      colorHover={colorHover}
      href="http://github.com/ravenwilde"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 63 61"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>ravenwilde@Github</title>
        <g fill="currentColor" fillRule="evenodd">
          <path d="M31.218 0C13.978 0 0 13.976 0 31.218 0 45.01 8.945 56.712 21.348 60.84c1.56.29 2.133-.677 2.133-1.502 0-.744-.028-3.204-.04-5.812-8.686 1.888-10.518-3.683-10.518-3.683-1.42-3.61-3.466-4.568-3.466-4.568-2.833-1.938.213-1.898.213-1.898 3.134.22 4.784 3.217 4.784 3.217 2.785 4.773 7.303 3.393 9.085 2.595.28-2.018 1.088-3.396 1.98-4.175-6.933-.79-14.222-3.466-14.222-15.428 0-3.408 1.22-6.193 3.216-8.38-.324-.785-1.392-3.96.303-8.26 0 0 2.62-.84 8.587 3.2 2.49-.692 5.16-1.04 7.814-1.05 2.653.01 5.325.358 7.82 1.05 5.958-4.04 8.576-3.2 8.576-3.2 1.7 4.3.63 7.475.306 8.26 2.002 2.187 3.213 4.972 3.213 8.38 0 11.99-7.303 14.63-14.254 15.403 1.118.97 2.116 2.87 2.116 5.78 0 4.178-.036 7.54-.036 8.568 0 .83.562 1.804 2.144 1.498 12.397-4.133 21.33-15.83 21.33-29.618C62.435 13.976 48.46 0 31.22 0" />
          <path d="M11.692 44.987c-.07.155-.313.202-.535.095-.226-.102-.354-.313-.28-.47.067-.16.31-.203.537-.096.227.102.357.315.278.47M13.228 46.357c-.15.138-.44.074-.638-.144-.204-.218-.242-.51-.09-.65.152-.137.434-.072.64.145.203.22.243.51.088.65M14.28 48.11c-.19.133-.503.008-.696-.27-.192-.277-.192-.61.004-.743.194-.133.502-.013.698.262.19.28.19.614-.005.75M16.063 50.14c-.172.19-.536.14-.803-.12-.273-.25-.35-.608-.177-.797.173-.19.54-.136.808.12.272.25.355.61.173.797M18.365 50.826c-.075.244-.426.356-.78.252-.353-.107-.584-.394-.513-.64.074-.247.426-.363.782-.252.353.107.585.39.51.64M20.986 51.117c.008.257-.29.47-.663.475-.373.008-.675-.2-.68-.453 0-.26.294-.473.667-.48.372-.006.676.2.676.457M23.56 51.018c.044.25-.214.51-.582.578-.363.066-.698-.09-.744-.338-.045-.258.217-.516.58-.582.368-.064.7.087.746.342" />
        </g>
      </svg>
    </IconLink>
  )
}

export default GitHubIconLink
