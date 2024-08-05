import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Electricity = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={55}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)" filter="url(#b)">
      <Path
        fill="#000"
        d="M.812 54.016c-.13-.053-.276-.098-.39-.174-.391-.25-.514-.817-.33-1.308.322-.862.636-1.732.958-2.594.337-.908.682-1.815 1.027-2.723.574-1.543 1.149-3.085 1.731-4.62.652-1.732 1.295-3.464 1.947-5.204.597-1.595 1.188-3.191 1.785-4.787A945.94 945.94 0 0 0 9.12 28.38c.007-.023.007-.046.023-.106-.253-.015-.49-.046-.728-.053-.866-.023-1.732-.03-2.59-.053-.483-.008-.966-.038-1.449-.046-.62-.022-1.226-.03-1.839-.052a9.47 9.47 0 0 1-1.126-.106c-.521-.076-.797-.689-.667-1.097.138-.439.337-.854.537-1.27.467-.984.95-1.967 1.417-2.95l1.54-3.244c.506-1.067 1.02-2.133 1.525-3.2.514-1.08 1.027-2.162 1.54-3.251.506-1.067 1.02-2.133 1.526-3.2.513-1.08 1.026-2.162 1.54-3.251.505-1.059 1.011-2.118 1.51-3.176.29-.613.559-1.233.858-1.838.199-.416.559-.613 1.026-.613h6.966c.92 0 1.839-.007 2.759 0 .712.008 1.425.023 2.13.053.75.03 1.142.688.873 1.414-.36.984-.728 1.96-1.103 2.935l-1.793 4.65c-.406 1.067-.812 2.141-1.219 3.207-.375.976-.75 1.952-1.118 2.927-.016.045-.023.09-.046.174h.29c.828 0 1.648.008 2.476 0 1.625-.015 3.241-.03 4.866-.053.437-.008.835.098 1.034.5.207.423.13.839-.168 1.217-.904 1.157-1.801 2.314-2.705 3.471-.797 1.021-1.586 2.042-2.391 3.063-.881 1.127-1.762 2.246-2.644 3.365-.666.855-1.325 1.717-2 2.572-.789 1.005-1.586 2.004-2.375 3.01-.59.748-1.157 1.512-1.747 2.26-.667.855-1.349 1.702-2.023 2.565-.59.748-1.165 1.512-1.747 2.26-.621.795-1.25 1.574-1.863 2.368-.467.59-.927 1.195-1.394 1.785L6.935 47.02c-.406.529-.805 1.043-1.21 1.557-.614.787-1.22 1.573-1.832 2.36-.66.855-1.326 1.702-1.985 2.556-.192.25-.437.439-.743.522H.812Zm10-44.196c-.628 1.33-1.264 2.662-1.892 3.993Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .873h30v53.143H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Electricity;
