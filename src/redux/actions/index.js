// Lista de actions relacionadas a company 
export const addCompany = (company) => ({
    type: 'ADD_COMPANY',
    payload: company
  });
  
  export const updateCompany = (company) => ({
    type: 'UPDATE_COMPANY',
    payload: company
  });
  
  export const deleteCompany = (companyId) => ({
    type: 'DELETE_COMPANY',
    payload: companyId
  });
  
