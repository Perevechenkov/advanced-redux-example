import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.scss';

export default function MainHeader(props) {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
