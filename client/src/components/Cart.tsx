import { Minus, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { useState } from "react";
import CheckoutConfirmPage from "./CheckoutConfirmPage";
import { useCartStore } from "@/store/useCartStore";
import { CartItem } from "@/types/cartType";

const Cart = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { cart, incrementQuantity, decrementQuantity } = useCartStore();
  let totalAmount = cart.reduce((acc, ele) => {
    return acc + ele.price * ele.quantity;
  }, 0);
  return (
    <div className="flex flex-col max-w-7xl mx-auto my-10">
      <div className="flex justify-end">
        <Button variant="link">clear All</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Items</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Total</TableHead>
            <TableHead className="text-right">Remove</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cart.map((item: CartItem, idx: number) => (
            <TableRow key={idx}>
              <TableCell>
                <Avatar>
                  <AvatarImage src={item.image} alt="" />
                  <AvatarFallback>PK</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <div className="w-fit flex items-center rounded-full border border-gray-100 dark:border-gray-800 shadow-md ">
                  <Button
                    size={"icon"}
                    variant={"outline"}
                    className="rounded-full  bg-gray-200"
                    onClick={() => decrementQuantity(item._id)}
                  >
                    <Minus />
                  </Button>
                  <Button
                    size={"icon"}
                    className="font-bold border-none"
                    disabled
                    variant={"outline"}
                  >
                    {item.quantity}
                  </Button>
                  <Button
                    size={"icon"}
                    className="rounded-full bg-orange hover:bg-hoverOrange"
                    variant={"outline"}
                    onClick={() => incrementQuantity(item._id)}
                  >
                    <Plus />
                  </Button>
                </div>
              </TableCell>
              <TableCell>{item.price * item.quantity}</TableCell>
              <TableCell className="text-right">
                <Button size={"sm"} className="bg-orange hover:bg-hoverOrange">
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="text-2xl font-bold">
            <TableCell colSpan={5}>Total</TableCell>
            <TableCell className="text-right">{totalAmount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div className="flex justify-end my-5">
        <Button
          onClick={() => setOpen(true)}
          className="bg-orange hover:bg-hoverOrange"
        >
          Proceed to checkout
        </Button>
      </div>
      <CheckoutConfirmPage open={open} setOpen={setOpen} />
    </div>
  );
};

export default Cart;
