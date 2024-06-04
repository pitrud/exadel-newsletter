"use client";

import { API_URL } from "@/constants";
import React, { useState } from "react";

interface IProps {
  src: string;
  postId: number;
  className?: string;
}

const ImageWithFallback = ({ src, postId, className, ...rests }: IProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      onError={() => {
        setImgSrc(`${API_URL}api/v1/posts/${postId}/thumbnail`);
      }}
      className={className || ""}
      alt=""
      {...rests}
    />
  );
};

export default ImageWithFallback;
