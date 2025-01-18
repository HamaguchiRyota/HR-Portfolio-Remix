import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="rounded-2xl border border-indigo-500/100 border-color-indigo max-h-96 shadow-lg hover:shadow-indigo-500/50 duration-300 mb-auto">
      <img
        className="rounded-t-2xl w-full"
        src={image}
        alt="Project Thumbnail"
      />

      <div className="p-3 rounded-b-2xl bg-gray-900 shadow-inner">
        <h1 className="font-bold text-xl mb-3">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;
