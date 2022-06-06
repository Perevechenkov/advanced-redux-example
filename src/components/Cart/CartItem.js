import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../store/cart-slice';
import classes from './CartItem.module.scss';

export default function CartItem(props) {
  const dispatch = useDispatch();
  const { id, title, quantity, total, price } = props;

  const addItemHandler = () => {
    dispatch(
      addItem({
        id,
        title,
        quantity,
        total,
        price,
      })
    );
  };

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
}
