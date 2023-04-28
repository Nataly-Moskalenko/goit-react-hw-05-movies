import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

export default function Layout() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/">Home</NavLink>
        <NavLink className={(navData) => (navData.isActive ? css.active : css.link)} to="/movies">Movies</NavLink>
      </nav>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
