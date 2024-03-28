import { FaHome } from 'react-icons/fa';
import { Sidebar } from '../../../components/Sidebar'


export const UpdateEmployee = () => {


    return (
        <div className='flex min-h-screen p-4'>
            <Sidebar />

            <main className='container mx-auto flex-grow flex p-4'>
                <section className='flex-grow px-4'>
                    <div className='bg-gray-300 h-8 p-6 flex items-center relative' style={{ borderRadius: '5px' }}>
                        <FaHome className='mr-2' />
                        <span className='text-black mr-2 font-bold'>&gt;</span>
                        Detalles del empleado
                    </div>

                    <div className="pt-12 grid grid-cols-8 gap-4">
                        <div className="col-span-2">
                            <label htmlFor="nombres" className="block font-medium text-gray-700">Nombres</label>
                            <input type="text" id="nombres" name="nombres" value="John" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="apellidos" className="block font-medium text-gray-700">Apellidos</label>
                            <input type="text" id="apellidos" name="apellidos" value="Perez" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="telefono" className="block font-medium text-gray-700">Telefono</label>
                            <input type="text" id="telefono" name="telefono" value="12344564" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="direccion" className="block font-medium text-gray-700">Direccion</label>
                            <input type="text" id="direccion" name="direccion" value="quetzaltenango, guatemala" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="correo" className="block font-medium text-gray-700">Correo electrónico (usuario)</label>
                            <input type="text" id="correo" name="correo" value="Jonh@ciancoders.com" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="dpi" className="block font-medium text-gray-700">DPI</label>
                            <input type="text" id="dpi" name="dpi" value="1223344" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="genero" className="block font-medium text-gray-700">Género</label>
                            <select id="genero" name="genero" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled>
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="fechaNacimiento" className="block font-medium text-gray-700">Fecha de nacimiento</label>
                            <input type="text" id="fechaNacimiento" name="fechaNacimiento" value="14/07/2005" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="fechaContratacion" className="block font-medium text-gray-700">Fecha de contratación</label>
                            <input type="text" id="fechaContratacion" name="fechaContratacion" value="08/03/2024" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="salarioBase" className="block font-medium text-gray-700">Salario Base</label>
                            <input type="text" id="salarioBase" name="salarioBase" value="$2000" className="mt-1 p-2 border border-gray-300 rounded-md w-full" disabled />
                        </div>
                        <div className="pt-8 col-span-2">
                            <input type="file" accept="image/*" />
                            <button>Subir Imagen</button>
                        </div>

                    </div>
                    <div className="pt-8 col-span-2">
                        <button className='bg-green-500 text-white font-semibold py-2 px-4 mr-2 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700'>
                            EDITAR
                        </button>
                    </div>

                </section>

            </main>
        </div>
    );
};
