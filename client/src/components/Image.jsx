import React from 'react'
import { IKImage } from "imagekitio-react";


const Image = ({src, className,w,h}) => {
  return (
        <IKImage
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          path={src}
          className={className}
          loading="lazy"
          lqip={{ active: true, quality: 20 }}
          width={w}
          height={h}
        />
  );
};

export default Image;