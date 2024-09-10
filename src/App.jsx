import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { isRefresh } from "./redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectorsAuthIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const RegistratitonPage = lazy(() =>
  import("./pages/RegistratitonPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  const refreshing = useSelector(selectorsAuthIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isRefresh());
  }, [dispatch]);

  return refreshing ? (
    <p>User is refreshing, please wait...</p>
  ) : (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} />}
            />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegistratitonPage />} />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
