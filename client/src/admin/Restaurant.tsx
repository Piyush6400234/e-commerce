import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  restaurantFormSchema,
  RestaurantFormSchema,
} from "@/schema/restaurantSchema";
import { Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

const Restaurant = () => {
  const [input, setInput] = useState<RestaurantFormSchema>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });
  const [errors, setErrors] = useState<Partial<RestaurantFormSchema>>({});
  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const type = e.target.type;
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = restaurantFormSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<RestaurantFormSchema>);
      return;
    }
    //   add restaurant api
    console.log(input);
  };
  const loading = false;
  const restaurantPresent = false;
  return (
    <div className="max-w-6xl mx-auto my-10  ">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5">Add restaurants</h1>
          <form onSubmit={submitHandler} action="">
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant name */}
              <div>
                <Label>Restaurant name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  placeholder="enter your restaurant name"
                  value={input.restaurantName}
                  onChange={changeEventHandler}
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.restaurantName}
                  </span>
                )}
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  value={input.city}
                  onChange={changeEventHandler}
                  placeholder="enter your city name"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.city}
                  </span>
                )}
              </div>
              <div>
                <Label>country</Label>
                <Input
                  type="text"
                  name="country"
                  value={input.country}
                  onChange={changeEventHandler}
                  placeholder="enter your country name"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.country}
                  </span>
                )}
              </div>
              <div>
                <Label>Delivery time</Label>
                <Input
                  type="number"
                  name="deliveryTime"
                  value={input.deliveryTime}
                  onChange={changeEventHandler}
                  placeholder="enter your delivery time"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.deliveryTime}
                  </span>
                )}
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  name="cuisines"
                  value={input.cuisines}
                  onChange={(e) =>
                    setInput({ ...input, cuisines: e.target.value.split(",") })
                  }
                  placeholder="e.g. momos, biryani"
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.cuisines}
                  </span>
                )}
              </div>
              <div>
                <Label>Upload restaurant Banner</Label>
                <Input
                  type="file"
                  name="imageFile"
                  accept="image/*"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0] || undefined,
                    })
                  }
                />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.imageFile?.name || "Image file is required."}
                  </span>
                )}
              </div>
            </div>
            <div className="my-5 w-fit">
              {loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  please wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-hoverOrange">
                  {restaurantPresent
                    ? "Update your restaurant"
                    : "Add your restaurant"}
                </Button>
              )}
              {/* <Button className="bg-orange hover:bg-hoverOrange">
                Add your restaurant
              </Button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
