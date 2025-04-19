
import './App.css'

import {useForm} from 'react-hook-form';

function App() {

  const {register, handleSubmit, formState: {errors}, watch } = useForm()

  return (
    <>
      <div className="flex justify-center items-center pt-10">
  <form className="flex flex-col gap-5 w-[400px]" onSubmit={handleSubmit((data)=>{
    console.log("Formulario enviado",data)
  })}>

    {/*Nombre*/}
    <div className="flex items-center">  
      <label htmlFor="nombre" className="w-40 text-right pr-3">
        Nombre
      </label>
      <input type="text" className="border border-black w-full px-2 py-1" id="nombre" 
      {...register("nombre", {required: {value:true, message: "Campo requerido"}, minLength:{value:2,message:"Nombre debe tener al menos dos caracteres"}, maxLength:{value:20, message:"Nombre debe tener menos de 20 caracteres"}})} /> 
      {errors.nombre?.message && <span className="text-red-500">{String(errors.nombre.message)}</span>}
      </div>

    {/*Correo*/}
    <div className="flex items-center">
      <label htmlFor="correo" className="w-40 text-right pr-3">
        Correo
      </label>
      <input type="email" className="border border-black w-full px-2 py-1" id="correo" {...register("email", {required:{value:true,message:"Campo requerido"},pattern:{value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,message:"Correo no válido"}})}/> 
      {errors.email && <span className="text-red-500">{String(errors.email.message)}</span>}
      </div>

    {/*Contraseña*/}
    <div className="flex items-center">
      <label htmlFor="password" className="w-40 text-right pr-3">
        Contraseña
      </label>
      <input type= "password" className="border border-black w-full px-2 py-1" {...register("password", {required:{value:true, message:"Campo requerido"}})}/> 
      {errors.password && <span className="text-red-500">{String(errors.password.message)}</span>}  
      </div>  

    {/*Confirmar Contraseña*/}
    <div className="flex items-center">
      <label htmlFor="confirmarPassword" className="w-40 text-right pr-3" >
        Confirmar Contraseña
      </label>
      <input type="password" className= "border border-black w-full px-2 py-1" id="confirmarPassword" {...register("confirmarPassword", {required:{value:true,message:"Campo requerido"},validate:(value)=>{
        if(value !== watch("password")){
          return "Las contraseñas no coinciden"
        }
      }})}/> 
      {errors.confirmarPassword && <span className="text-red-500">Este campo es requerido</span>}
      </div>

    <div className="flex justify-center">
      <button type="submit" className="border rounded border-black px-6 py-1">
        Enviar
      </button>
    </div>

    <pre>
        {JSON.stringify(watch(), null, 2)}
    </pre>

  </form>
</div>
    
    </>
  )
}

export default App
