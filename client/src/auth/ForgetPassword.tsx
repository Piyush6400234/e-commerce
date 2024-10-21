import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const loading = false;
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <form className="flex flex-col gep-5 md:p-8 w-full max-w-md rounded-lg mx-4">
        <div className="text-center">
          <h1 className="font-extrabold text-2xl mb-2">Forgot password?</h1>
          <p className="text-sm text-gray-600">
            Enter your email eddress to reset your password
          </p>
        </div>
        <div className="relative w-full mt-6">
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            className="pl-10"
          />
          <Mail className="absolute inset-y-2 left-2 text-gray-600 pointer-events-none" />
        </div>
        {loading ? (
          <Button disabled className="bg-orange hover:bg-hoverOrange mt-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            please wait
          </Button>
        ) : (
          <Button className="bg-orange hover:bg-hoverOrange mt-4">
            send reset link
          </Button>
        )}
              <span className="mt-4 text-center">Back to {" "}
                  <Link to={"/login"} className="text-blue-500">Login</Link>
              </span>
      </form>
    </div>
  );
};
export default ForgetPassword;
