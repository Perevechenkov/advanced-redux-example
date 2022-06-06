import { useDispatch, useSelector } from 'react-redux';
import { addItem, replaceCart } from '../../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.scss';

export default function ProductItem(props) {
  const { items, totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    const newTotalQuantity = totalQuantity + 1;

    const updatedItems = items.slice();
    const existingItem = updatedItems.find(item => item.id === id);

    if (existingItem) {
      const updatedItem = { ...existingItem };
      updatedItem.quantity++;
      updatedItem.totalPrice = updatedItem.totalPrice + price;
      const existingItemIndex = updatedItems.findIndex(item => item.id === id);
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({
        id: id,
        title: title,
        price: price,
        quantity: 1,
        totalPrice: price,
      });
    }

    const newCart = {
      items: updatedItems,
      totalQuantity: newTotalQuantity,
    };

    dispatch(replaceCart(newCart));

    // fetch('https://movies-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/cart.json', { method: 'POST', body: JSON.stringify(newCart) })

    // dispatch(
    //   addItem({
    //     id,
    //     title,
    //     price,
    //   })
    // );
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
