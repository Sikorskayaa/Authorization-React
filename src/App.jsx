import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Layout from "./components/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const RegistratitonPage = lazy(() =>
  import("./pages/RegistratitonPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <>
      <Layout>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistratitonPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
