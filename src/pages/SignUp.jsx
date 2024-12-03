import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { register } from "@/store/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

export default function SignUpForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (showSuccess) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        navigate("/login");
      }, 7000); // Redirect after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showSuccess, navigate]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().max(15).required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .matches("^.{5,10}$", "Minimum any five characters required")
        .required("Please enter your password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password do not match")
        .required("Please enter your confirm password"),
    }),
    onSubmit: (values) => {
      dispatch(register(values));
      setShowSuccess(true);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        {showSuccess && (
          <Alert className="mb-4">
            <AlertDescription className="flex items-center justify-between">
              <span>Sign up successful!</span>
              {isLoading && (
                <div className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span>Redirecting to login...</span>
                </div>
              )}
            </AlertDescription>
          </Alert>
        )}
        <form
          noValidate
          onSubmit={formik.handleSubmit}
          className="space-y-4 w-full max-w-Id"
        >
          <Input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your name"
            aria-label="Name"
            disabled={isLoading}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
          ) : null}

          <Input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Your email address"
            aria-label="Email"
            disabled={isLoading}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
          ) : null}

          <Input
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Create a password"
            aria-label="Password"
            disabled={isLoading}
          />

          {formik.touched.password && formik.errors.password ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </p>
          ) : null}

          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Confirm your password"
            aria-label="Confirm password"
            disabled={isLoading}
          />

          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <p className="text-red-500 text-sm mt-1">
              {formik.errors.confirmPassword}
            </p>
          ) : null}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing up...
              </>
            ) : (
              "Sign Up"
            )}
          </Button>

          {/* <Button type="submit" className="w-full">
            Sign Up
          </Button> */}
        </form>
        <p className="mt-3">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
