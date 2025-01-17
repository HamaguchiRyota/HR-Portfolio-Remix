import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="rounded-md border border-sky-500 max-h-96">
      <img
        className="rounded-t-md w-full"
        src={image}
        alt="Project Thumbnail"
      />

      <div className="p-3">
        <h1 className="font-bold text-xl mb-3">{title}</h1>
        <p className="text-">{description}</p>
      </div>
    </div>
  );
};

export default Card;
