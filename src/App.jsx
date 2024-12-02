import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/Home";
import DetailProduct from "./pages/DetailProduct";
import SignUpForm from "./pages/SignUp";
import LoginForm from "./pages/Login";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />{" "}
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />

          <Route
            path="/:slug"
            element={
              <PrivateRoute>
                <DetailProduct />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
