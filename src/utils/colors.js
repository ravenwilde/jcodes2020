const palettes = {
  grayScale: {
    primary: { name: "dim_gray", hex: "#696969" },
    light: { name: "light_gray", hex: "#c0c0c0" },
    midLight: { name: "mid_light_gray", hex: "#a9a9a9" },
    midDark: { name: "mid_dark_gray", hex: "#707070" },
    dark: { name: "dark_gray", hex: "#4F4F4F" },
  },
  miamiSunset: {
    primary: { name: "blue_bayoux", hex: "#455C7B" },
    light: { name: "texas_rose", hex: "#FFAA5C" },
    midLight: { name: "new_york_pink", hex: "#DA727E" },
    midDark: { name: "turkish_rose", hex: "#AC6C82" },
    dark: { name: "smoky", hex: "#685C79" },
  },
}

const colors = [
  // Miami Sunset Palette
  { name: "texas_rose", hex: "#FFAA5C" },
  { name: "new_york_pink", hex: "#DA727E" },
  { name: "turkish_rose", hex: "#AC6C82" },
  { name: "smoky", hex: "#685C79" },
  { name: "blue_bayoux", hex: "#455C7B" },
]

const defaultColor = colors.find(c => c.name === "blue_bayoux")

export { colors, palettes, defaultColor }
