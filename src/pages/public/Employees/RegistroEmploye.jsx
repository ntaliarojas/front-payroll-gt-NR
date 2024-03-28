import { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { Sidebar } from '../../../components/Sidebar'

export const RegistroEmploye = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        address: '',
        picture: '',
        dpi: '',
        date_hiring: '',
        date_completion: '',
        birthday: '',
        gender: '',
        base_salary: '',
        base_salary_initial: '',
        head_department: '',
        method_payment: '',
        bank: '',
        account_number: '',
        department: '',
        job_position: '',
        user: '',
        company: '',
        is_active: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


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

                    <form  className='grid grid-cols-4 gap-4 px-4'>
    <div>
        <label htmlFor='first_name'>Nombre *</label>
        <input
            type='text'
            id='first_name'
            name='first_name'
            value={formData.first_name}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='last_name'>Apellido *</label>
        <input
            type='text'
            id='last_name'
            name='last_name'
            value={formData.last_name}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='phone'>Teléfono *</label>
        <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
            maxLength={8}
            className='w-full border border-gray-300 rounded-md py-2 px-4'
            placeholder='12345678'
        />
    </div>
    <div>
        <label htmlFor='address'>Dirección *</label>
        <input
            type='text'
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
            placeholder='Dirección'
        />
    </div>
    <div>
        <label htmlFor='picture'>Imagen *</label>
        <input
            type='text'
            id='picture'
            name='picture'
            value={formData.picture}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='dpi'>DPI *</label>
        <input
            type='text'
            id='dpi'
            name='dpi'
            value={formData.dpi}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='date_hiring'>Fecha de contratación *</label>
        <input
            type='date'
            id='date_hiring'
            name='date_hiring'
            value={formData.date_hiring}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='date_completion'>Fecha de finalización</label>
        <input
            type='date'
            id='date_completion'
            name='date_completion'
            value={formData.date_completion}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='birthday'>Fecha de nacimiento *</label>
        <input
            type='date'
            id='birthday'
            name='birthday'
            value={formData.birthday}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='gender'>Género *</label>
        <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        >
            <option value=''>Seleccionar género</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
        </select>
    </div>
    <div>
        <label htmlFor='base_salary'>Salario base *</label>
        <input
            type='number'
            id='base_salary'
            name='base_salary'
            value={formData.base_salary}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='base_salary_initial'>Salario base inicial</label>
        <input
            type='number'
            id='base_salary_initial'
            name='base_salary_initial'
            value={formData.base_salary_initial}
            onChange={handleChange}
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='head_department'>Jefe de departamento *</label>
        <select
            id='head_department'
            name='head_department'
            value={formData.head_department}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        >
            <option value=''>Seleccionar</option>
            <option value='true'>Sí</option>
            <option value='false'>No</option>
        </select>
    </div>
    <div>
        <label htmlFor='method_payment'>Método de pago *</label>
        <select
            id='method_payment'
            name='method_payment'
            value={formData.method_payment}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        >
            <option value=''>Seleccionar método de pago</option>
            <option value='BANCO'>Banco</option>
            <option value='CHEQUE'>Cheque</option>
            <option value='EFECTIVO'>Efectivo</option>
        </select>
    </div>
    <div>
        <label htmlFor='bank'>Banco *</label>
        <select
            id='bank'
            name='bank'
            value={formData.bank}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded
            -md py-2 px-4'
            >
                <option value=''>Seleccionar banco</option>
                <option value='BANRURAL'>Banrural</option>
                <option value='BANCO INDUSTRIAL'>Banco Industrial</option>
                <option value='G&T CONTINENTAL'>G&T Continental</option>
                <option value='BAM'>Banco Agromercantil</option>
                <option value='BAC'>Banco de América Central</option>
            </select>
        </div>
        <div>
        <label htmlFor='account_number'>Número de cuenta *</label>
        <input
            type='text'
            id='account_number'
            name='account_number'
            value={formData.account_number}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='department'>Departamento *</label>
        <input
            type='text'
            id='department'
            name='department'
            value={formData.department}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='job_position'>Puesto de trabajo *</label>
        <input
            type='text'
            id='job_position'
            name='job_position'
            value={formData.job_position}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='user'>Usuario *</label>
        <input
            type='text'
            id='user'
            name='user'
            value={formData.user}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='company'>Compañía *</label>
        <input
            type='text'
            id='company'
            name='company'
            value={formData.company}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        />
    </div>
    <div>
        <label htmlFor='is_active'>Activo *</label>
        <select
            id='is_active'
            name='is_active'
            value={formData.is_active}
            onChange={handleChange}
            required
            className='w-full border border-gray-300 rounded-md py-2 px-4'
        >
            <option value='true'>Sí</option>
            <option value='false'>No</option>
        </select>
    </div>
    <div className='col-span-2'>
        <button
            type='submit'
            className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-6'
        >
            Enviar
        </button>
    </div>
</form>
                </section>
            </main>
        </div>
    );
};
