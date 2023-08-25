import propTypes from "prop-types";

function Die(props) {
  Die.propTypes = {
    value: propTypes.number,
    isHeld: propTypes.bool,
    hold: propTypes.func,
  };

  const { isHeld, value, hold } = props;

  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die-container" style={styles} onClick={hold}>
      <h1>{value}</h1>
    </div>
  );
}

export default Die;
