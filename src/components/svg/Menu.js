import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Menu(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path stroke="#000" d="M2 19.5h8.75M2 4.5h20H2zM2 12h20H2z" />
    </Svg>
  )
}

export default Menu;