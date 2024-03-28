import { addCompany, updateCompany, deleteCompany } from '../../redux/actions'

export const handleAddCompanyAction = dispatch => {
  const newCompanyData = {
    id: 3,
    name: 'Empresa 3',
    phone: 'phone Empresa 3',
    description: 'description Empresa 3',
    address: 'address Empresa 3',
    picture: 'picture  Empresa 3',
  }
  dispatch(addCompany(newCompanyData))
}

export const handleUpdateCompanyAction = dispatch => {
  const updatedCompanyData = {
    id: 1,
    name: 'Empresa 1 actualizada',
    phone: 'phone Empresa 1 actualizada',
    description: 'description Empresa 1 actualizada',
    address: 'address Empresa 1 actualizada',
    picture: 'picture  Empresa 1 actualizada',
  }
  dispatch(updateCompany(updatedCompanyData))
}

export const handleDeleteCompanyAction = dispatch => {
  const companyIdToDelete = 1
  dispatch(deleteCompany(companyIdToDelete))
}

