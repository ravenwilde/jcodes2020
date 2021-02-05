import React from "react"

import IconLink from "./iconlink"

const LinkedInIconLink = ({ style, color, colorHover }) => (
  <IconLink
    style={style}
    color={color}
    colorHover={colorHover}
    href="https://linkedin.com/in/jenniferascroggins/"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 61 61"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>jenniferascroggins@LinkedIn</title>
      <path
        d="M51.62 51.622h-8.978v-14.06c0-3.354-.06-7.666-4.67-7.666-4.675 0-5.39 3.653-5.39 7.424v14.302H23.6v-28.91h8.62v3.95h.12c1.198-2.273 4.13-4.67 8.5-4.67 9.1 0 10.78 5.988 10.78 13.772v15.858zM13.477 18.76c-2.88 0-5.21-2.336-5.21-5.212 0-2.873 2.33-5.208 5.21-5.208 2.873 0 5.207 2.335 5.207 5.208 0 2.876-2.334 5.21-5.207 5.21zm-4.494 3.95h8.985v28.912H8.982v-28.91zM56.096 0H4.472C2.005 0 0 1.955 0 4.366v51.842c0 2.413 2.005 4.37 4.472 4.37h51.624c2.47 0 4.484-1.957 4.484-4.37V4.366C60.58 1.956 58.567 0 56.096 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  </IconLink>
)

export default LinkedInIconLink
