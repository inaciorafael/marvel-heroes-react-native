import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Search(props) {
  return (
    <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="#000"
        d="M22 22l-6.667-6.667L22 22zM17.556 9.778a7.777 7.777 0 11-15.554 0 7.777 7.777 0 0115.554 0z"
      />
    </Svg>
  )
}

export default Search;
