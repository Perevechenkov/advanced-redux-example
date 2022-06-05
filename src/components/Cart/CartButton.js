import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/ui-slice';
import classes from './CartButton.module.scss';

export default function CartButton(props) {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
}
