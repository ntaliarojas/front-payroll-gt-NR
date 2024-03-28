
import { Link } from 'react-router-dom';

import { Navigation } from '../../components/Navigation'
export const Home = () => (
  <>
    <Navigation />
    <div className='bg-gray-800 h-screen flex justify-center items-center'>
      <div className='absolute top-0 left-0 ml-8 mt-8 h-4 w-4 rounded-full bg-white dark:bg-white'></div>
      <div className='absolute top-0 left-5 ml-8 mt-8 h-6 w-2 bg-primary'></div>
      <span className='text-white text-3xl font-bold absolute top-0 left-8 ml-8 mt-6'>
        Payroll
      </span>
      <div className='text-center'>
        <h1 className='text-[80px] text-white font-bold mb-4'>
          Payroll platform
        </h1>
        <p className='text-white'>T Consulting, S.A.</p>
        <p className='text-white'>
          Lleva el control de tu nomina facil, rapido y seguro!
        </p>

        <div className='flex justify-center items-center pt-16'>
          <button className='bg-purple-900 text-white font-semibold py-2 px-4 mr-2 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700'>
            <Link to='/register-company' className="text-white  hover:text-gray-600">Prueba Gratis</Link>
          </button>
          <button className='bg-gray-300 bg-opacity-50 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400'>
            Registro de empresa
          </button>
        </div>
        <p className="text-[45px] text-white pt-8 ">Confian en nosotros</p>

      </div>
    </div>
  </>
)
