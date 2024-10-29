import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignupInputState, userSignupSchema } from "@/schema/userSchema";
import { useUserStore } from "@/store/useUserStore";
import { Separator } from "@radix-ui/react-separator";
import { LockKeyhole, Mail, Loader2, User, Phone } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const [input, setInput] = useState<SignupInputState>({
    email: "",
    password: "",
    fullname: "",
    contact: "",
  });
  const [errors, setErrors] = useState<Partial<SignupInputState>>({});
  const { signup, loading } = useUserStore();
  const navigate = useNavigate();
  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setInput({ ...input, [name]: value });
  };
  const LoginEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    //form validation
    const result = userSignupSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<SignupInputState>);
      return;
    }
    //api implementation
    try {
      await signup(input);
      navigate("/verify-email")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        className="md:p-8 w-full max-w-md border border-gray-200 rounded-lg mx-4"
        action=""
        onSubmit={LoginEventHandler}
      >
        <div className="mb-4 ">
          <h1 className="font-bold text-2xl">International Eats</h1>
        </div>

        <div className="mb-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Full name"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              className="pl-10 focus-visible: ring-0 "
            />
            <User className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
            {errors && (
              <span className="text-xm text-red-500">{errors.fullname}</span>
            )}
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <Input
              type="text "
              placeholder="Contact number"
              value={input.contact}
              name="contact"
              onChange={changeEventHandler}
              className="pl-10 focus-visible: ring-0 "
            />
            <Phone className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
            {errors && (
              <span className="text-xm text-red-500">{errors.contact}</span>
            )}
          </div>
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
              <span className="text-xm text-red-500">{errors.email}</span>
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
              <span className="text-xm text-red-500">{errors.password}</span>
            )}
          </div>
        </div>
        <div className="mb-2">
          {loading ? (
            <Button disabled className="bg-orange hover:bg-hoverOrange ">
              <Loader2 className="mr-2 h-4 w-4 animate-spin">Loading</Loader2>
            </Button>
          ) : (
            <Button type="submit" className="bg-orange hover:bg-hoverOrange ">
              Login
            </Button>
          )}
        </div>
        <Separator className="mt-2" />
        <p>
          Already have an account? {""}
          <Link className="text-blue-500" to={"/login"}>
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Signup;
