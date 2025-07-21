import { useEffect, useState } from "react";

function Rightside() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 100); // small delay to trigger animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="container d-flex flex-column align-items-center rounded-4"
      style={{
        maxWidth: '400px',
        width: '100%',
        marginTop: '20px',
      }}
    >
      {[300, 200, 120].map((finalHeight, index) => (
        <div
          key={index}
          className="rounded-4"
          style={{
            width: '100%',
            height: expanded ? `${finalHeight}px` : '100px', // initial: all are 300px
            backgroundColor: '#1d1d1d',
            marginTop: expanded && index !== 0 ? '1.5rem' : '0px', // gap of 4 (1.5rem)
            transition: 'height 1.5s ease, margin-top 1.5s ease',
            overflow: 'hidden',
          }}
        ></div>
      ))}
    </div>
  );
}

export default Rightside;
