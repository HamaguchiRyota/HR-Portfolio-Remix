import React from "react";

interface CardProps {
  title: string;
  description: string;
  date: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, date, image }) => {
  return (
    <div className="rounded-2xl border border-indigo-500/100 border-color-indigo shadow-lg hover:shadow-indigo-500/50 duration-300 mb-auto">
      <img
        className="rounded-t-2xl w-full"
        src={image}
        alt="Project Thumbnail"
        onContextMenu={(e) => e.preventDefault()}
        onSelect={(e) => e.preventDefault()}
        onMouseDown={(e) => e.preventDefault()}
      />

      <div className="p-3 rounded-b-2xl bg-gray-900 shadow-inner">
        <h1 className="font-bold text-xl mb-3">{title}</h1>
        <p className="text-sm">{description}</p>
        <p className="text-xs text-gray-400 mt-3">{date}</p>
      </div>
    </div>
  );
};

export default Card;
