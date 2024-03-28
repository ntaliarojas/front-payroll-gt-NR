const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COMPANY':
      return {
        
        ...state,
        companiesList: [...state.companiesList, action.payload]
      };
    case 'UPDATE_COMPANY':
      return {
        ...state,
        companiesList: state.companiesList.map(company =>
        company.id === action.payload.id ? action.payload : company
        )
      };
    case 'DELETE_COMPANY':
      return {
        ...state,
        companiesList: state.companiesList.filter(company =>
        company.id !== action.payload
        )
      };
    default:
      return state;
  }
};
  
export default reducer;