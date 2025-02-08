import { useContext, memo } from "react";
import { DashBoardContext } from "@/contexts/DashBoardContext";
import DashBoardCard from "@/components/DashBoardCard";
import AddCardDialog from "@/components/AddCardDialog";
import { ScrollArea } from "@/components/ui/scroll-area";

function DashBoard() {
  const { addNewCard, cards } = useContext(DashBoardContext);

  return (
    <div className="container-fluid mx-auto p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 bg-dark-a0 ">
      <div className="min-h-[90vh] bg-custom-dark-blue rounded-3xl shadow-2xl p-3 sm:p-5 md:p-6 lg:p-8 xl:p-10">
        <header className="mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-a50 ">
            DashBoard
          </h1>
        </header>
        <ScrollArea className="h-full sm:h-[65vh] md:h-[70vh] lg:h-[75vh] xl:h-[80vh] rounded-md p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12">
            <div className="flex items-center justify-center  min-h-[250px] rounded-lg bg-gradient-to-t from-primary-a10 to-surface-a10">
              <AddCardDialog addNewCard={addNewCard} />
            </div>
            {cards?.map((card) => (
              <DashBoardCard cards={card} key={card?.id} isAddCard={false} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

export default memo(DashBoard);
