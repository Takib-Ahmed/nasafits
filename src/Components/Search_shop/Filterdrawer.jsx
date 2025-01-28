import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { FaFilter } from "react-icons/fa";

import Filterlist from "./Filterlist";


export default function Filterdrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        className="bg-transparent hover:text-black text-white p-0 w-min"
        onPress={onOpen}
      >
        <FaFilter />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onOpenChange={onOpenChange} className=" rounded-none">
        <DrawerContent>
          {(onClose) => (
            <>
              <div className="text-center text-2xl py-5">
                Filter Options
              </div>
              <DrawerBody>
                <Filterlist />
              </DrawerBody>
              {/* <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </DrawerFooter> */}
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
