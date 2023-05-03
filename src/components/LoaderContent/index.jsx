import React, { useState, useEffect } from "react";
import PreLoader from "../../objects/PreLoader";
import { motion } from "framer-motion";

const Content = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simula uma requisição assíncrona que leva 3 segundos para ser concluída
    setTimeout(() => {
      setIsLoading(false);
      setShowContent(true);
    }, 2000);
  }, []);

  return <div>{isLoading && <PreLoader />}</div>;
};

export default Content;
