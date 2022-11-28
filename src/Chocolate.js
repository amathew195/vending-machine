import chocolate from './images/twix.jpg';
import './Chocolate.css';

/**
 * No props
 * No state
 *
 * returns chocolate image
 */

function Chocolate() {
  return (
    <div className="chocolate">
      <img alt="chocolate" src={chocolate} />
    </div>
  );
}

export default Chocolate;