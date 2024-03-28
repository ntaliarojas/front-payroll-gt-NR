import { connect } from 'react-redux'
import {
  handleAddCompanyAction,
  handleUpdateCompanyAction,
  handleDeleteCompanyAction,
} from './CompanyEventHandlers'

class StoreConsumptionComponent extends Component {
  componentDidMount() {
    console.log('El componente StoreConsumptionComponent se ha montado')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.companiesList !== this.props.companiesList) {
      console.log('La lista de empresas ha cambiado.')
    }
  }

  componentWillUnmount() {
    console.log('El componente StoreConsumptionComponent se desmontará')
  }

  handleAddCompany = () => {
    const { dispatch } = this.props
    handleAddCompanyAction(dispatch)
  }

  handleUpdateCompany = () => {
    const { dispatch } = this.props
    handleUpdateCompanyAction(dispatch)
  }

  handleDeleteCompany = () => {
    const { dispatch } = this.props
    handleDeleteCompanyAction(dispatch)
  }

  render() {
    const { companiesList } = this.props

    return (
      <div>
        {/* Botones para mandar a llamar a las arrow functions que a su vez llaman a los action */}
        <button onClick={this.handleAddCompany}>Agregar Empresa</button>
        <br />
        <button onClick={this.handleUpdateCompany}>Actualizar Empresa</button>
        <br />
        <button onClick={this.handleDeleteCompany}>Eliminar Empresa</button>
        <br />

        <br />
        <h2>LISTA DE EMPRESAS</h2>
        <ul>
          {/* Lectura de la lista companies en store */}
          {companiesList.map(company => (
            <li key={company.id}>
              <strong> Nombre: </strong> {company.name}
              <strong> Phone: </strong> {company.phone}
              <strong> Description: </strong> {company.description}
              <strong> Address: </strong> {company.address}
              <strong> Picture: </strong> {company.picture}
              <br />
              <br />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

//Funcion para definir que parte del store nos interesa utilizar
const mapStateToProps = state => ({
  companiesList: state.companiesList,
})

//Suscribimos a nuestro componente con el store
export default connect(mapStateToProps)(StoreConsumptionComponent)
