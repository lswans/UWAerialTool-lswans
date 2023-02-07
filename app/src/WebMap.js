/*
import React, { useEffect, useRef } from "react";

export function WebMap() {
  const elementRef = useRef();

  useEffect(_ => {
    let cleanup;
    // lazy load the module that loads the JSAPI
    // and initialize it
    import("./mapdata").then(
      mapdata => cleanup = mapdata.initialize(elementRef.current)
    );
    return () => cleanup && cleanup();
  }, []);

  // assign elementRef to the ref of our component
  return (
    <div className="viewDiv" ref={elementRef}>
    </div>
  );
}
*/