import classes from './CartButton.module.scss';

export default function CartButton(props) {
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
}
