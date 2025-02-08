import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { memo } from "react";

const DashBoardCard = ({ isAddCard, cards }) => {
  return (
    <Card className="bg-surface-a10 border border-none hover:shadow-lg transition-shadow p-4">
      {!isAddCard ? (
        <>
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-bold text-light-a0">
              {cards?.title}
            </CardTitle>
            <CardDescription className="text-lg mt-2 text-light-a0">
              {cards?.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button
              asChild
              className="  hover:bg-opacity-90 transition-colors border  text-light-a0  bg-surface-a10 hover:bg-surface-a20 hover:text-primary-a20 "
            >
              <Link to={`/Resume/${cards?.id}`}>Open</Link>
            </Button>
          </CardFooter>
        </>
      ) : (
        <button className="text-4xl font-bold text-custom-text-gray hover:text-custom-text-purple transition-colors">
          +
        </button>
      )}
    </Card>
  );
};

export default memo(DashBoardCard);
