import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoginInputState, userLoginSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Separator } from "@radix-ui/react-separator";
import { LockKeyhole, Mail, Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<LoginInputState>>({});
  const { loading, login } = useUserStore();
  const navigate = useNavigate();
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(input);
    setInput({ ...input, [name]: value });
  };
  const LoginEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    const result = userLoginSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<LoginInputState>);
      return;
    }

    await login(input);
    try {
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        className="md:p-8 w-full max-w-md  border-gray-200 rounded-lg mx-4"
        action=""
        onSubmit={LoginEventHandler}
      >
        <div className="mb-4 ">
          <h1 className="font-bold text-2xl">International Eats</h1>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="pl-10 focus-visible: ring-0 "
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
            {errors && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              className="pl-10 focus-visible: ring-0 "
            />
            <LockKeyhole className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
            {errors && (
              <span className="text-xs text-red-500">{errors.password}</span>
            )}
          </div>
        </div>
        <div className="mb-2 text-center">
          {loading ? (
            <Button disabled className="bg-orange hover:bg-hoverOrange ">
              <Loader2 className="mr-2 h-4 w-4 animate-spin">Loading</Loader2>
            </Button>
          ) : (
            <Button type="submit" className="bg-orange hover:bg-hoverOrange ">
              Login
            </Button>
          )}
          <div className="mt-4">
            <Link
              className="hover:text-blue-500 hover:underline"
              to={"/forget-password"}
            >
              reset password
            </Link>
          </div>
        </div>
        <Separator />
        <p className="mt-2 text-center">
          Don't have an account? {""}
          <Link className="text-blue-500" to={"/signup"}>
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
