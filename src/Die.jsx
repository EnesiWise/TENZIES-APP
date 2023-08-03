function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };
  return (
    <div className="die-container" style={styles} onClick={props.hold}>
      <h1>{props.value}</h1>
    </div>
  );
}
export default Die;
