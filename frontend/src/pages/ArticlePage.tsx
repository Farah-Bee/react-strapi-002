import React from "react";
import { useParams } from "react-router-dom";

const ArticlePage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Article {id}</h1>
      <p className="text-gray-600">Article content goes here...</p>
    </div>
  );
};

export default ArticlePage;
