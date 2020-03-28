import  * as localStorageService  from './localStorage.service';

const STORAGE_NAME = 'transactions';
export const addTransaction = (transaction) => {
    if (!transaction || transaction.id || transaction.amount || transaction.bankId ) {
        throw new Error('Data invalid');
    }
    const transactions = localStorageService.getFromStorage(STORAGE_NAME)
    const existing = transactions.find((storedTransaction) => storedTransaction.id === transaction.id)
    if (existing) {
        return existing;
    }
    localStorageService.pushToStorage(STORAGE_NAME, transaction);
};

export const listAllTransactions = () => localStorageService.getFromStorage(STORAGE_NAME);

export const deleteTransactionById = (id) => localStorageService.deleteItemFromStorage(STORAGE_NAME, id);