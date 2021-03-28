import { Dasboard } from "./components/Dasboard";
import { Header } from "./components/Header";

import Modal from 'react-modal';

import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContextProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {

  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsTransactionModalOpen(false);
  }

  return (
    <TransactionsContextProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dasboard />

      <NewTransactionModal 
        isOpen={isTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsContextProvider>
  )
}