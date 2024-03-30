import { useEffect } from "react";
import { useLocation } from "react-router";
import React from "react";
export default function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
}
