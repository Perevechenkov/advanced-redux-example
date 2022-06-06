import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.scss';

export default function ProductItem(props) {
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    // fetch('https://movies-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { method: 'POST', body: JSON.stringify(newCart) })

    dispatch(
      addItem({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
}
