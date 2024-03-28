import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const [showRecHumanos, setShowRecHumanos] = useState(false);
    const [showGesNomina, setShowGesNomina] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleRecHumanos = () => {
        setShowRecHumanos(!showRecHumanos);
        setShowGesNomina(false); // Cerrar GES. NOMINA al abrir REC. HUMANOS
    };

    const toggleGesNomina = () => {
        setShowGesNomina(!showGesNomina);
        setShowRecHumanos(false); // Cerrar REC. HUMANOS al abrir GES. NOMINA
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const handleLogout = () => {
        // Redirigir al usuario a la página de inicio
        window.location.href = '/';
        // Reemplazar la entrada actual en el historial del navegador
        window.history.replaceState(null, '', '/');
        // También podrías realizar otras acciones de cierre de sesión aquí si es necesario
    };

    return (
        <div className={showSidebar ? "h-screen w-64 bg-gray-800 rounded-lg" : "hidden"}>
            <div className="p-6">
                <a className="flex  justify-center items-center pt-16 pb-12 text-white text-2xl font-semibold uppercase hover:text-gray-300">Usuario</a>
            </div>
            <nav>
                <a className="flex pt-6 pb-6 items-center py-2 px-6 bg-gray-800 text-gray-100 border-t border-b border-gray-700" onClick={toggleRecHumanos}>
                    <span>REC. HUMANOS</span>
                    {showRecHumanos ? <span className="ml-auto">-</span> : <span className="ml-auto">+</span>}
                </a>
                {showRecHumanos && (
                    <div className='p-6'>
                        <a className="flex items-center py-2 px-6 bg-gray-800 text-gray-100" href="#">
                            <Link to='/ListEmploye' className="text-white hover:text-gray-600">Empleados</Link>
                        </a>
                        <a className="flex items-center py-2 px-6 bg-gray-800 text-gray-100" href="#">
                            <Link to='#' className="text-white hover:text-gray-600">Puesto</Link>
                        </a>
                        <a className="flex items-center py-2 px-6 bg-gray-800 text-gray-100" href="#">
                            <Link to='/Departamentos' className="text-white hover:text-gray-600">Departametos</Link>
                        </a>
                    </div>
                )}
                <a className="flex items-center pt-6 pb-6 py-2 px-6 bg-gray-800 text-gray-100 border-b border-gray-700" onClick={toggleGesNomina}>
                    <span>GES. NOMINA</span>
                    {showGesNomina ? <span className="ml-auto">-</span> : <span className="ml-auto">+</span>}
                </a>
                {showGesNomina && (
                    <div>
                        <a className="flex items-center py-2 px-6 bg-gray-800 text-gray-100" href="#">
                            <Link to='/Nominas' className="text-white hover:text-gray-600">Nomina</Link>
                        </a>
                        <a className="flex items-center py-2 px-6 bg-gray-800 text-gray-100" href="#">
                            <Link to='/#' className="text-white hover:text-gray-600">Conceptos</Link>
                        </a>
                        <a className="flex items-center py-2 px-6 bg-gray-800 text-gray-100" href="#">
                            <Link to='/#' className="text-white hover:text-gray-600">Perocidad</Link>
                        </a>
                    </div>
                )}
            </nav>

            <div className='justify-center items-center flex pt-6'>
                {/* Usar un simple botón para salir */}
                <button onClick={handleLogout} className='bg-gray-300 bg-opacity-50 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-400 focus:outline-none focus:bg-gray-400'>
                    Salir
                </button>
            </div>

        </div>
    );
};
