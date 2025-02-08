import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { memo, useState } from "react";

const AddCardDialog = ({ addNewCard }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      alert("Title and description are required");
      return;
    }

    const bodyData = {
      title: title,
      description: description,
    };

    addNewCard(bodyData);

    setTitle("");
    setDescription("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Resume Name</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
          />
        </div>
        <DialogFooter className="sm:justify-start">
          <div className="flex justify-between w-full">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={handleSubmit} type="button" variant="secondary">
                Submit
              </Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default memo(AddCardDialog);
