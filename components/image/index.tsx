import React from "react";
import Image, { ImageProps } from "next/legacy/image";

interface Props extends ImageProps {
  alt: string;
}
const Img: React.FC<Props> = ({ src, alt, height, width, ...rest }) => {
  return <Image width={width} height={height} src={src} alt={alt} {...rest} />;
};

export default Img;
