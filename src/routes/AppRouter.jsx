
import { Routes, Route } from 'react-router-dom'
import { AuthRoute } from '../routes/AuthRoute';

import {
  Employee,
  Payroll,
  Profile,
  Store,
  Dashboard,
  Company,
} from '../pages/private'
import { Login,Home, Uikit, NotFound, Rest, 
  ListEmploye, UpdateEmployee, RegisterCompany, Departamentos, 
  Nominas, InicioAdmi, RegistroEmploye,
} from '../pages/public';


const AppRouter = () => {
  return (

    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/uikit' element={<Uikit />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={< Login/>}/>
      <Route path='/Rest' element={< Rest/>}/>
      <Route path='/ListEmploye' element={< ListEmploye/>}/>
      <Route path='/UpdateEmployee' element={< UpdateEmployee/>}/>
      <Route path='/register-company' element={< RegisterCompany/>}/>
      <Route path='/Departamentos' element={< Departamentos/>}/>
      <Route path='/Nominas' element={< Nominas/>}/>
      <Route path='/InicioAdmi' element={< InicioAdmi/>}/>
      <Route path='/RegistroEmploye' element={< RegistroEmploye/>}/>


{/* ----------PRIVATE ROUTES-------- */}
      <Route path='/dashboard' element={<AuthRoute>< Dashboard/></AuthRoute>}/>
      <Route path='/profile' element={<AuthRoute><Profile /></AuthRoute>}/>
      <Route path='/company' element={<AuthRoute>< Company/></AuthRoute>}/>
      <Route path='/employee' element={<AuthRoute><Employee /></AuthRoute>}/>
      <Route path='/Payroll' element={<AuthRoute> <Payroll/> </AuthRoute>}/>
      <Route path='/store' element={<AuthRoute>< Store/></AuthRoute>}/>
    </Routes>
    </>
  )
}

export default AppRouter