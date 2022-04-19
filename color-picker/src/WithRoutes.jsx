import React from "react";
import { useParams } from "react-router-dom";

const WithRoutes = (Combine) => {
  function EnhancedWithRoutes() {
    const params = useParams();
    return <Combine params={params} />;
  }
  return EnhancedWithRoutes;
};

export default WithRoutes;
