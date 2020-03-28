import * as transactionService from '../services/transaction.service';

export const ACTION_TYPES = {
    LIST_ALL_TRANSACTIONS: 'LIST_ALL_TRANSACTIONS',
    DELETE_TRANSACTION_BY_ID: 'DELETE_TRANSACTION_BY_ID',
}
export const listAllTransactions = () => (dispatch, getState) => {
    try {
        const transactions = transactionService.listAllTransactions();
        console.log('LISTALL', transactions);
        return dispatch({
            type: ACTION_TYPES.LIST_ALL_TRANSACTIONS,
            transactions: [...transactions]
        })
    } catch(err) {
        console.log(err)
        // return {
        //     type: 'EMPTY_ACTION'
        // }
    }
};
export const deleteTransactionById = (transactionId) => (dispatch, getState) => {
    try {
        console.log('DELETE', getState());
        transactionService.deleteTransactionById(transactionId);
        return dispatch({
            type: ACTION_TYPES.DELETE_TRANSACTION_BY_ID,
            transactionId
        })
    } catch (err) {
        console.log(err)
        // return {
        //     type: 'EMPTY_ACTION'
        // }
    }
}
