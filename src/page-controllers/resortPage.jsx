import React, { useEffect, useState } from "react";
import "../App.css";

function ResortPage({ match }) {
  useEffect(() => {
    generatePageContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [resort, setResort] = useState({});
  const generatePageContent = async () => {
    try {
      const response = await fetch(
        `https://5sx1m.sse.codesandbox.io/api/resorts/${match.params.id}`
      );
      const resort = await response.json();
      setResort(resort);
      console.log(resort);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <h1 className="page-title">{resort.title}</h1>
      <p>{resort.description}</p>
    </div>
  );
}

export default ResortPage;
