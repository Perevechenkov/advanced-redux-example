import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { showNotification } from './store/ui-slice';

function App() {
  const cartIsVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        showNotification({
          status: 'pending',
          title: 'Sending',
          message: 'sending cart data',
        })
      );

      const response = await fetch(
        'https://movies-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        { method: 'PUT', body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully',
        })
      );
    };

    sendCartData().catch(err => {
      dispatch(
        showNotification({
          status: 'error',
          title: err.message,
          message: 'Sending cart data failed',
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification item={notification} />}
      <Layout>
        {cartIsVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
