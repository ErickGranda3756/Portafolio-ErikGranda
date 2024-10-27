const ShinyEffect = ({ left, right, top, size = 500 }) => {
  const estilosPosicion = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    zIndex: -1,
  };
  if (left !== undefined) {
    estilosPosicion.left = `${left}px`;
  }
  if (right !== undefined) {
    estilosPosicion.right = `${right}px`;
  }
  return (
    <div
      className="shiny-effect"
      style={estilosPosicion}
    >
      
    </div>
  );
};

export default ShinyEffect;
