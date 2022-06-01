import Card from '../UI/Card';
import CartItem from './CartItem';
import classes from './Cart.module.scss';

export default function Cart(props) {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        />
      </ul>
    </Card>
  );
}
