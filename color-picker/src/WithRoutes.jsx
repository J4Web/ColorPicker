import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const WithRoutes = (Combine) => {
  function EnhancedWithRoutes(props) {
    const params = useParams();
    const nav = useNavigate();
    return <Combine params={params} nav={nav} {...props} />;
  }
  return EnhancedWithRoutes;
};

export { WithRoutes };
