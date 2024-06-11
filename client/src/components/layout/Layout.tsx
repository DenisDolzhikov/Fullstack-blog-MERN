import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={styles.box}>
      <Outlet />
    </div>
  );
};

export { Layout };
