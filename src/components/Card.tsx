import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="max-w-lg rounded border-2 border-solid border-gray overflow-hidden p-5 shadow-md bg-gray m-auto">
      <Image
        className="w-10 h-10 object-contain"
        width={100}
        height={100}
        src={imageUrl}
        alt={title}
      />
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
