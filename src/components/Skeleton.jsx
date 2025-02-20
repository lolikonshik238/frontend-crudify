import React, { useState, useRef, useEffect } from "react";

const Skeleton = () => {
  const divRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (divRef.current) {
      setSize({
        width: divRef.current.clientWidth,
        height: divRef.current.clientHeight,
      });
    }
  }, []); // [] означает, что useEffect сработает только один раз

  return (
    <div ref={divRef} style={{ width: "100%", height: "200px", width: "352px", background: "lightgray" }} className="skeleton">
      
    </div>
  );
};

export default Skeleton;
