import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import useAi from "@/Hooks/useAi";
import { Loader2 } from "lucide-react";

const SheetMenu = () => {
  const { handleResult, inputText, outputText, setInputText, Loading } =
    useAi();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="absolute -top-4 right-0  border border-primary-a10 bg-surface-a10 text-light-a0 hover:bg-surface-a20 hover:text-primary-a20 transition-colors">
          Open AI Assistant
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-surface-a10 text-light-a0 shadow-lg p-6">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-light-a0 ">
            AI Summary Assistant
          </SheetTitle>
          <SheetDescription className="mt-2">
            <div className="space-y-4">
              <Label htmlFor="inputText" className="block text-light-a0 ">
                Enter your summary:
              </Label>
              <Textarea
                id="inputText"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your summary"
                className="border border-custom-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-custom-green transition"
              />
              <div className="space-y-2">
                <Label htmlFor="outputText" className="block text-light-a0 ">
                  Improved Summary to be more ATS-friendly
                </Label>
                <Textarea
                  id="outputText"
                  value={outputText}
                  readOnly
                  placeholder="Your improved summary will appear here..."
                  className="border border-custom-gray/30 rounded-md bg-custom-gray/5 focus:outline-none focus:ring-2 focus:ring-custom-green transition"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={handleResult}
                  className="mt-8   transition-colors duration-300 ease-in-out bg-primary-a20 text-dark-a0  hover:bg-primary-a50"
                >
                  {Loading ? (
                    <Loader2 className="animate-spin h-5 w-5" />
                  ) : (
                    "Generate"
                  )}
                </Button>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default SheetMenu;
