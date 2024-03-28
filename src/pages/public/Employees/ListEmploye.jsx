import { Sidebar } from '../../../components/Sidebar'
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaHome } from 'react-icons/fa';

export const ListEmploye = () => {
    return (
        <div className='flex min-h-screen p-4' id='ListEmploye'>
            <Sidebar />

            <main className='container mx-auto flex-grow flex p-4'>
                <section className='flex-grow px-4'>
                    <div className='bg-gray-300 h-8 p-6 flex items-center relative' style={{ borderRadius: '5px' }}>
                        <FaHome className='mr-2' />
                        <span className='text-black mr-2 font-bold'>&gt;</span>
                        Empleados
                    </div>
                    <button
                        className="absolute top-9 right-16  bg-gray-500 bg-opacity-50 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
                    >
                        <Link to='/RegistroEmploye' className="text-white  hover:text-gray-600">Nuevo</Link>
                    </button>

                    <br />
                    <div className="  bg-gray-200 shadow-md rounded-lg overflow-hidden w-64">
                        <img className="w-full h-40 object-cover object-center" alt={name} />
                        <div className="p-4">
                            <h2 className="text-gray-800 font-semibold text-lg mb-2">Natalia Rojas </h2>
                            <p className="text-gray-600 text-sm">21 </p>
                            <p className="text-gray-600 text-sm">Vendedor </p>
                            <p className="text-gray-600 text-sm">Jonh@ciancoders.com</p>
                            <div className="flex justify-between items-center mt-4">
                                <Link to='/UpdateEmployee' className="text-blue-500 hover:text-blue-700 focus:outline-none">
                                    <FaEdit />
                                </Link>
                                <button className="text-red-500 hover:text-red-700 focus:outline-none">
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                    

                </section>

            </main>
        </div >
    );
};
