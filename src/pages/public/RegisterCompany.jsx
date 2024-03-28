
import ImgUploader from '../../components/uploadFiles/ImgUploader'
import { companyService } from '../../services/company-service'
import UploadFirebaseService from '../../services/firebase'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const RegisterCompany = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        companyName: '',
        phoneNumber: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: '',
        description: '',
        logo: null,
    })

    const handleChange = e => {
        const { name, value, files } = e.target
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (formData.password !== formData.confirmPassword) {
                throw new Error('Las contraseñas no coinciden')
            }

            const phoneRegex = /^\d+$/
            if (!phoneRegex.test(formData.phoneNumber)) {
                throw new Error('El número de teléfono debe contener solo dígitos')
            }

            const firebaseImageUrl = await uploadImageToFirebaseStorage(formData.logo)

            const response = await companyService.createCompany(
                formData.companyName,
                formData.phoneNumber,
                formData.description,
                formData.address,
                firebaseImageUrl,
                formData.email,
                formData.password,
            )

            console.log('Respuesta al ingresar compañía:', response)
            alert('¡La empresa se registró exitosamente!')
            navigate('/')
        } catch (error) {
            alert('Error al registrar la empresa: ' + error.message)
            console.error('Error al registrar la empresa:', error)
        }
    }

    const uploadImageToFirebaseStorage = async imageFile => {
        try {
            const uploadFirebaseService = UploadFirebaseService.getInstance()
            const imageUrl = await uploadFirebaseService.uploadFile(imageFile, '')
            return imageUrl
        } catch (error) {
            console.error('Error al cargar la imagen en Firebase Storage:', error)
            throw error
        }
    }

    return (
        <div className='bg-blue-950 h-screen flex justify-center items-center'>
            <div className='flex h-screen w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:max-w-4xl'>
                <div
                    className='hidden bg-contain bg-no-repeat lg:block lg:w-1/2'
                    style={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className='w-full top-0 px-6 md:px-8 lg:w-1/2'>

                    <div className=' top-0' onSubmit={handleSubmit}>
                        <div className='mt-1'>
                            <label htmlFor='companyName'>
                                Nombre de la empresa o institución *
                            </label>
                            <input
                                type='text'
                                id='companyName'
                                name='companyName'
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                                className='w-full border border-gray-300 rounded-md py-2 px-4'
                                placeholder='Ingrese el nombre de la empresa o institución'
                            />
                        </div>
                        <div className='mt-1'>
                            <label htmlFor='phoneNumber'>Teléfono *</label>
                            <input
                                type='tel'
                                id='phoneNumber'
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                                maxLength={8}
                                className='w-full border border-gray-300 rounded-md py-2 px-4'
                                placeholder='12345678'
                            />
                        </div>
                        <div className='mt-1'>
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
                        <div className='mt-1'>
                            <label htmlFor='email'>Correo electrónico (usuario) *</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className='w-full border border-gray-300 rounded-md py-2 px-4'
                                placeholder='example@gmail.com'
                            />
                        </div>
                        <div className='mt-1'>
                            <label htmlFor='password'>Password *</label>
                            <input
                                type='password'
                                id='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className='w-full border border-gray-300 rounded-md py-2 px-4'
                                placeholder='********'
                            />
                        </div>
                        <div className='mt-1'>
                            <label htmlFor='confirmPassword'>Confirmación *</label>
                            <input
                                type='password'
                                id='confirmPassword'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                className='w-full border border-gray-300 rounded-md py-2 px-4'
                                placeholder='********'
                            />
                        </div>
                        <div className='mt-1'>
                            <label htmlFor='description'>Descripción *</label>
                            <textarea
                                id='description'
                                name='description'
                                value={formData.description}
                                onChange={handleChange}
                                required
                                className='w-full border border-gray-300 rounded-md py-2 px-4'
                                placeholder='Descripcion'
                            />
                        </div>
                        {/* Utilizando el componente para subir imágenes a Firebase */}
                        <div className='flex flex-row'> {/* Added flex container for horizontal placement */}
                            <div className='mt-1'>
                                <label htmlFor='logo'>Logo de la empresa</label>
                                <ImgUploader onChange={handleChange} />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <button
                                    type='submit'
                                    className='bg-blue-500 text-white font-bold py-2 px-4 rounded mt-6 ml-4' // Added ml-4 for margin-left
                                >
                                    Enviar
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
