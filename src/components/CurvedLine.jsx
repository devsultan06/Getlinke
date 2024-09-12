const CurvedLine = () => {
  return (
    <div className="curve-container float-right">
      <svg
        width="400"
        height="350"
        viewBox="0 0 300 150"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 80 Q 150 50 250 80"
          stroke="#FF26B9"
          strokeWidth="4"
          fill="transparent"
          className="curved-line"
        />
      </svg>
    </div>
  );
};

export default CurvedLine;
