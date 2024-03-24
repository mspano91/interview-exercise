import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import ArticleIcon from "@mui/icons-material/Article";

export default function InfoModal(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    stockName,
    stockCloseP,
    stockOpenP,
    stockHigherP,
    stockLowerP,
    stockTrans,
    stockTimestamp,
    stockTradingV,
    stockVolWeighted,
  } = props;

  // const formatTimestamp = (timestamp) => {
  //   const date = new Date(timestamp);
  //   return date.toLocaleString();
  // };

  return (
    <>
      <ArticleIcon
        onClick={onOpen}
        className="text-white cursor-pointer hover:text-slate-800 "
      />
      <Modal className="w-[400px]" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex  border-black flex-col gap-1">
                <h1 className="text-3xl text-teal-600 py-4">{stockName}</h1>
                {/* <div className="flex justify-right flex-row">
                  <p className="pr-4">From: </p>
                  {formatTimestamp(stockTimestamp)}
                </div> */}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-row">
                  <p className="font-bold pr-4">Close: </p>
                  {stockCloseP}
                </div>
                <div className="flex flex-row">
                  <p className="font-bold pr-4">Open: </p>
                  {stockOpenP}
                </div>
                <div className="flex flex-row">
                  <p className="font-bold pr-4">Higher: </p>
                  {stockHigherP}
                </div>
                <div className="flex flex-row">
                  <p className="font-bold pr-4">Lower: </p>
                  {stockLowerP}
                </div>
                <div className="flex flex-row">
                  <p className="font-bold pr-4">Transations:</p>
                  {stockTrans}
                </div>

                <div className="flex flex-row">
                  <p className="font-bold pr-4">Volume: </p>
                  {stockTradingV}
                </div>
                <div className="flex flex-row">
                  <p className="font-bold pr-4">VW Number: </p>
                  {stockVolWeighted}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
