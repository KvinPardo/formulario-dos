import React from 'react'
import Trees from '../assets/trees.jpg'

const Form = () => {
  return (
    <div className="w-full h-screen flex">
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-md shadow-gray-600 sm:max-w-[900px] rounded-md'>
            <div className='hidden md:block w-full h-[550px] '>
                <img src={Trees} alt="" className='w-full h-full rounded-l-md'/>
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                    <h2 className='text-4xl font-bold text-center mb-8'>Bienvenido</h2>
                    <div>
                        <input className='border p-2 mr-2 rounded-md' type="text" placeholder='Usuario'/>
                        <input className='border p-2 rounded-md' type="password" placeholder='Contraseña'/>
                    </div>
                    <button className='w-full py-2 my-4 bg-green-600 hover:bg-green-500 rounded-md text-white'>Iniciar Sesión</button>
                    <p className='text-center'>¿Olvidaste tu Contraseña?</p>
                </form>
                <p className='text-center'>Regístrate</p>
            </div>
        </div>
    </div>
  )
}

export default Form