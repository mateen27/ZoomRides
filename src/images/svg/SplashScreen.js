import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Path,
  Text
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: animate */

function SplashScreen(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" {...props}>
      <Defs>
        <LinearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#4a90e2" stopOpacity={1} />
          <Stop offset="100%" stopColor="#1e3a8a" stopOpacity={1} />
        </LinearGradient>
      </Defs>
      <Circle cx={150} cy={150} r={145} fill="url(#a)" />
      <Path
        d="M90 80h120L90 220h120"
        stroke="#fff"
        strokeWidth={20}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M230 150h40"
        stroke="#fff"
        strokeWidth={15}
        strokeLinecap="round"
      ></Path>
      <Path
        d="M220 120h40"
        stroke="#fff"
        strokeWidth={10}
        strokeLinecap="round"
      ></Path>
      <Path
        d="M220 180h40"
        stroke="#fff"
        strokeWidth={10}
        strokeLinecap="round"
      ></Path>
      <Text
        x={150}
        y={270}
        fontFamily="Arial, sans-serif"
        fontSize={24}
        fill="#fff"
        textAnchor="middle"
        fontWeight="bold"
      >
        {"ZoomRides"}
      </Text>
    </Svg>
  )
}

export default SplashScreen
