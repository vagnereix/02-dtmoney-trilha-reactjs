import { createContext, useEffect, useState, ReactNode, useContext } from 'react' 
import { api } from '../services/api';

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string,
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    locale: string;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const locale = new Intl.DateTimeFormat().resolvedOptions().locale;

    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        });
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);
    }
    
    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction, locale }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}