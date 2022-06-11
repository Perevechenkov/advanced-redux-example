import classes from './Notification.module.scss';

export default function Notification(props) {
  const { status, title, message } = props.item;

  let specialClasses = '';

  if (status === 'error') specialClasses = classes.error;
  if (status === 'success') specialClasses = classes.success;

  const scssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={scssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
}
