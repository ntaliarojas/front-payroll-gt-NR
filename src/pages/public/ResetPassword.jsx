
export const Rest = () => {
    return (
        <div className='bg-gray-800 h-screen flex justify-center items-center'>
            <div className='absolute top-0 left-0 ml-8 mt-8 h-4 w-4 rounded-full bg-white dark:bg-white'></div>
            <div className='absolute top-0 left-5 ml-8 mt-8 h-6 w-2 bg-primary'></div>
            <span className='text-white text-3xl font-bold absolute top-0 left-8 ml-8 mt-6'>
                Payroll
            </span>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl'>
                {/* Imagen */}
                <div
                    className='hidden bg-cover lg:block lg:w-1/2'
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHBoYXJldHR5LWJveHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")',
                    }}
                ></div>
                {/* Formulario */}
                <div className='w-full px-6 py-2 md:px-8 lg:w-1/2'>
                    <p className='text-xl font-semibold text-center text-gray-600'>
                        BIENVENIDO
                    </p>
                    <form className='mt-2' action='' method='POST'>
                    <p className='text-xl font-semibold text-black'>
                        Cambio de Contraseña
                    </p>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='email'
                            >
                                Password *
                            </label>
                            <input
                                id='email'
                                placeholder='********'
                                autoComplete='off'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                                value=''
                                name='email'
                            />
                        </div>

                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='email'
                            >
                                Confirmación *
                            </label>
                            <input
                                id='email'
                                placeholder='******'
                                autoComplete='off'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                                value=''
                                name='email'
                            />
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Cambiar
                            </button>
                        </div>

                        <div className='mt-6'>
                            <button
                                type='submit'
                                className=' px-6 py-3 text-sm font-medium tracking-wide text-black capitalize transition-colors duration-300 transform bg-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Regresar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
