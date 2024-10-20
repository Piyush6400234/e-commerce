import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import { LockKeyhole, Mail, Loader2 } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

type LoginInputState = {
  email: string;
  password: string;
};

const Login = () => {
  const loading: boolean = false;
  const [input, setInput] = useState<LoginInputState>({
    email: "",
    password: "",
  });

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(input);
    setInput({ ...input, [name]: value });
  };
  const LoginEventHandler = (e: FormEvent) => {
    e.preventDefault();
    // console.log(input);
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
              type="email"
              placeholder="Email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              className="pl-10 focus-visible: ring-0 "
            />
            <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none " />
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
          Don't have an account? {""}
          <Link className="text-blue-500" to={"/signup"}>
            SIgn up
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Login;
