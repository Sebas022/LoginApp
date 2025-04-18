import react from "react";

import { useForm } from "react-hook-form";

type RegistroFormData = {
  email: string;
  password: string;
};

const Registro = () => {

    const {registro, handleSubmit, formState: { errors }} = useForm<RegistroFormData>();

    const onSubmit = (data: RegistroFormData) => {
        console.log('Datos enviados: '+data);
    }

    return (
        <div className="container">
            <h1>Registro</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" {...registro("email", { required: true })} />
                    {errors.email && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" {...registro("password", { required: true })} />
                    {errors.password && <span className="text-danger">Este campo es obligatorio</span>}
                </div>
                <button type="submit" className="btn btn-primary">Registrar</button>
            </form>
        </div>
    );

    
};