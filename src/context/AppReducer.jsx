import TransactionItem from "../componets/Transaction";

export default (state,action)=>{
    switch(action.type){
        case'DELETE_TRANSACTION':
        return{
            ...state,
            transactions: state.transactions.filter(transactions => transactions.id !== action.payload)

        }
        case 'ADD_TRANSACTION':
        return{
            ...state,
            transactions: [action.payload,...state.transactions]
            
        }
       
            return state;
    }
}