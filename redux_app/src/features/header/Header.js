import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../auth/authSlice';

import classes from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {authState.isAuthenticated && (
            <>
              <li>
                <a href="/">My Products</a>
              </li>
              <li>
                <a href="/">My Sales</a>
              </li>
            </>
          )}
          <li>
            <button onClick={() => dispatch(authActions.logout())}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;