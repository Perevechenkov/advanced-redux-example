import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import CartItem from './CartItem';
import classes from './Cart.module.scss';

export default function Cart(props) {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(product => {
          return (
            <CartItem
              key={product.id}
              id={product.id}
              title={product.title}
              quantity={product.quantity}
              total={product.price * product.quantity}
              price={product.price}
            />
          );
        })}
      </ul>
    </Card>
  );
}
