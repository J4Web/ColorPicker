import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const WithRoutes = (Combine) => {
  function EnhancedWithRoutes(props) {
    const params = useParams();
    const navigate = useNavigate();
    return <Combine params={params} nav={navigate} {...props} />;
  }
  return EnhancedWithRoutes;
};

export { WithRoutes };
