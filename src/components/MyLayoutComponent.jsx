
export const MyLayoutComponent = () => {
    return (
        <div className='flex min-h-screen p-4 text-white'>
            <aside
                className='w-64 bg-gray-800 p-4 hidden lg:block'
                style={{
                    width: '200px',
                    border: '1px solid black',
                    borderRadius: '5px',
                }}
            >
                <div className='flex justify-center items-center flex-col items-center justify-center pt-8'>
                    {/* Imagen */}
                    {/* Nombre */}
                    <h1 className='flex text-xl font-bold mt-4 pb-12'>Usuario</h1>
                </div>
                <ul>
                    <li className='mb-2'>
                        <a href='#' className='text-gray-300 hover:text-blue-500'>
                            REC. HUMANOS
                        </a>
                        <ul className='pl-4 list-disc'>
                            <li className='mb-1'>
                                <a href='#' className='text-gray-300 hover:text-blue-500'>
                                    Empleados
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a href='#' className='text-gray-300 hover:text-blue-500'>
                                    Puestos
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a href='#' className='text-gray-300 hover:text-blue-500'>
                                    Departamentos
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='mb-2'>
                        <a href='#' className='text-gray-300 hover:text-blue-500'>
                            GES. NOMINA
                        </a>
                        <ul className='pl-4 list-disc'>
                            <li className='mb-1'>
                                <a href='#' className='text-gray-300 hover:text-blue-500'>
                                    Nomina
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a href='#' className='text-gray-300 hover:text-blue-500'>
                                    Conceptos
                                </a>
                            </li>
                            <li className='mb-1'>
                                <a href='#' className='text-gray-300 hover:text-blue-500'>
                                    Periocidad
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <main className='container mx-auto flex-grow flex p-4'>
                <section className='flex-grow px-4'>
                  
                </section>
            </main>
        </div>
    )
}
