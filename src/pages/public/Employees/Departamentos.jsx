import { FaHome } from 'react-icons/fa';
import { Sidebar } from '../../../components/Sidebar'

export const Departamentos = () => {
    return (
        <div className='flex min-h-screen p-4' id='departamentos'>
              <Sidebar />
            <main className='container mx-auto flex-grow flex p-4'>
                <section className='flex-grow px-4'>
                    <div className='bg-gray-300 h-8 p-6 flex items-center relative' style={{ borderRadius: '5px' }}>
                        <FaHome className='mr-2' />
                        <span className='text-black mr-2 font-bold'>&gt;</span>
                        Detalles del empleado
                    </div>

                  <div>lista</div>


                </section>

            </main>
        </div>
    );
};
