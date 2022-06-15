import { replaceCart } from './cart-slice';
import { showNotification } from './ui-slice';

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const response = await fetch(
        'https://movies-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/cart.json'
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json();
    };

    try {
      const cartData = await fetchData();

      dispatch(replaceCart(cartData));
    } catch (err) {
      dispatch(
        showNotification({
          status: 'error',
          title: err.message,
          message: 'Fetching cart data failed',
        })
      );
    }
  };
};

export const sendCartData = cart => {
  return async dispatch => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending',
        message: 'sending cart data',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://movies-dummy-db-default-rtdb.europe-west1.firebasedatabase.app/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }
    };

    try {
      await sendRequest();

      dispatch(
        showNotification({
          status: 'success',
          title: 'Success',
          message: 'Sent cart data successfully',
        })
      );
    } catch (err) {
      dispatch(
        showNotification({
          status: 'error',
          title: err.message,
          message: 'Sending cart data failed',
        })
      );
    }
  };
};
