import { useLocation } from "@remix-run/react";
import { load, trackPageview } from "fathom-client";
import { useEffect } from "react";

const Fathom = () => {
  const location = useLocation();

  useEffect(() => {
    load("VVWKUPUN", {
      includedDomains: ["thi.contact"],
    });
  }, []);

  useEffect(() => {
    trackPageview();
  }, [location.pathname, location.search]);

  return null;
};

export default Fathom;
