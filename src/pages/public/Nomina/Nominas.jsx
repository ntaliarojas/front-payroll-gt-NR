import { FaHome } from 'react-icons/fa';
import { BsTrash } from 'react-icons/bs'; // Importa el icono de basura
import { Sidebar } from '../../../components/Sidebar'


export const Nominas = () => {
    return (
        <div className='flex min-h-screen p-4' id='departamentos'>
              <Sidebar />
            <main className='container mx-auto flex-grow flex p-4'>
                <section className='flex-grow px-4'>
                    <div className='pb-6 bg-gray-300 h-8 p-6 flex items-center relative' style={{ borderRadius: '5px' }}>
                        <FaHome className='mr-2' />
                        <span className='text-black mr-2 font-bold'>&gt;</span>
                        Detalles del empleado
                    </div>
                    <br />
                    <div className="relative bg-gray-300 border border-gray-300 rounded-lg shadow-md p-4 w-56">
                        {/* Icono de basura en la esquina superior derecha */}
                        <div className="absolute bg-gray-100 top-2 right-1 p-2">
                            <BsTrash className="text-red-600 h-4 w-4" />
                        </div>
                        {/* Contenido del card */}
                        <h1 className='font-semibold pt-4 pb-4'>Pre Nominas</h1>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="bg-gray-800 text-white py-3 px-4 rounded-md text-md">Mensual</button>
                            <button className="bg-gray-800 text-white py-3 px-3 rounded-md text-md">Qincenal</button>
                            <button className="bg-gray-800 text-white py-3 px-3 rounded-md text-md">Bono 14</button>
                            <button className="bg-gray-800 text-white py-3 px-3 rounded-md text-md">Aguinaldo</button>
                        </div>
                    </div>

                </section>


            </main>
        </div>
    );
};
