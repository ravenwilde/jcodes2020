const palettes = {
  grayScale: {
    name: "grayScale",
    primary: { name: "dim_gray", hex: "#696969" },
    light: { name: "light_gray", hex: "#c0c0c0" },
    midLight: { name: "mid_light_gray", hex: "#a9a9a9" },
    midDark: { name: "mid_dark_gray", hex: "#707070" },
    dark: { name: "dark_gray", hex: "#4F4F4F" },
    
    header: { name: "white", hex: "#FFFFFF" },
    text: { name: "white", hex: "#FFFFFF" },
    link: { name: "light_gray", hex: "#c0c0c0" },
    index: { name: "dim_gray", hex: "#696969" },
    about: { name: "mid_dark_gray", hex: "#707070" },
    resume: { name: "dark_gray", hex: "#4F4F4F" },
  },
  miamiSunset: {
    name: "miamiSunset",
    primary: { name: "blue_bayoux", hex: "#455C7B" },
    light: { name: "texas_rose", hex: "#FFAA5C" },
    midLight: { name: "new_york_pink", hex: "#DA727E" },
    midDark: { name: "turkish_rose", hex: "#AC6C82" },
    dark: { name: "smoky", hex: "#685C79" },
    
    header: { name: "white", hex: "#FFFFFF" },
    text: { name: "white", hex: "#FFFFFF" },
    link: { name: "texas_rose", hex: "#FFAA5C" },
    index: { name: "blue_bayoux", hex: "#455C7B" },
    about: { name: "turkish_rose", hex: "#AC6C82" },
    resume: { name: "smoky", hex: "#685C79" },
  },
}

const defaultColor = palettes.grayScale.light

export { palettes, defaultColor }
