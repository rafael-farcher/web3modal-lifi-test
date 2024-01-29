"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const LiFiWidgetNext = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <></>;

  const LiFiWidget = dynamic(
    () => {
      return import("./__lifi-widget-pure").then((module) => {
        return module.default;
      });
    },
    {
      ssr: false,
    }
  );

  return <LiFiWidget />;
};

export default LiFiWidgetNext;
