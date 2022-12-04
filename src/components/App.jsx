import React, { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

import { NotFoundPage } from '../pages/NotFoundPage';
import { Layout } from './Layout';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
  // const color = useColorModeValue('green.500', 'green.200');
  // const textColor = useColorModeValue('green.700', 'green.100');
  // const buttonImage = colorMode === 'light' ? <MoonIcon /> : <SunIcon />;

  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {/* <IconButton
        icon={buttonImage}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        color={color}
        _hover={{
          bg: 'green.100',
          boxShadow: '4px 4px 5px 0px rgba(0,0,0,0.75)',
        }}
        pos="absolute"
        top="2"
        right="2"
        onClick={toggleColorMode}
      /> */}

      {isRefreshing ? (
        <Loader />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Register />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<Login />}
                  />
                }
              />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <ToastContainer transition={Flip} />
        </div>
      )}
    </>
  );
};
