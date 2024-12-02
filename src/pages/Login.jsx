import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Eye, EyeOff } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        // .matches("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$", "Minimum eight characters, at least one letter and one number")
        .required("Please enter your password"),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
      if (isAuthenticated) {
        navigate("/");
      }
    },
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     dispatch(login(formData));
  //     if (isAuthenticated) {
  //       navigate("/");
  //     } else {
  //       setErrors("Invalid email or password");
  //     }

  //     //   console.log("Form submitted:", formData);
  //   } else {
  //     console.log("Form has errors");
  //   }
  // };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Login
        </h2>
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          className="space-y-4 w-full max-w-md"
        >
          <div>
            <Input
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Your email address"
              aria-label="Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="relative">
            <Input
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Create a password"
              aria-label="Password"
            />

            {formik.touched.password && formik.errors.password ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <p className="mt-3">
          Don&apos;t have an account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
