import chips from './images/chips.jpeg';
import './Chips.css';

/**
 * No props
 * No state
 *
 * returns chips image
 */

function Chips() {
  return (
    <div className="Chips">
      <img alt="chips" src={chips} />
    </div>
  );
}

export default Chips;