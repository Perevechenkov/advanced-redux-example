import ProductItem from './ProductItem';
import classes from './Products.module.scss';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    title: 'Smth',
    price: 6,
    description: 'This is a first product - amazing!',
  },
  {
    id: 'p2',
    title: 'Book',
    price: 2,
    description: 'This is a second product!',
  },
];

export default function Products(props) {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
}
