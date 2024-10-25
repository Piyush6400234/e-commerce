import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">
        Available Menu
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg"
            alt="image"
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4  ">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Tandoori Biryani
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span>80</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button className=" w-full bg-orange hover:bg-hoverOrange">
              Add to cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
