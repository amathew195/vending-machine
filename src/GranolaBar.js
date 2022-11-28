import granola from './images/granola_bar.jpg';
import './GranolaBar.css';

/**
 * No props
 * No state
 *
 * returns granola image
 */

function GranolaBar() {
  return (
    <div className="Granola-bar">
      <img alt="granola" src={granola} />
    </div>
  );
}

export default GranolaBar;