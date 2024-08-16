import React from "react";
import { useForm } from "react-hook-form";
import "../FormRegister/formRegister.css"
import Input from "../Utils/Input/Input"
import EnterButton from "../EnterButton/EnterButton";


const FormRegister = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) =>{
        console.log('data', data)
    }

    return (
    <>
        <form action="" className="form-default" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input-1 linha1">
                <Input
                    className={errors.firstName ? "error" : ""} //Se encontrou erro na validação atribui .error a classe input, se nao, permanece
                    label="Nome:" 
                    type="text" 
                    name="firstName" 
                    placeholder={errors.firstName ? errors.firstName.message : "Digite seu nome"} 
                    register={{...register('firstName', {required: "O nome é obrigatório."})}}
                />

                <Input 
                    className={errors.lastName ? "error" : ""}
                    label="Sobrenome:" 
                    type="text" 
                    name="lastName" 
                    placeholder={errors.firstName ? errors.lastName.message : "Digite seu sobrenome"} 
                    register={{...register('lastName', {required: "O sobrenome é obrigatório"})}} 
                />

                <Input 
                    className={errors.email ? "error" : ""}
                    label="Email:" 
                    type="text" 
                    name="email" 
                    placeholder={errors.email ? errors.email.message : "Digite seu melhor email"} 
                    register={{...register('email', {required: "O sobrenome é obrigatório",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Formato de email inválido."
                        }
                    })}}
                />
            </div>
            <div className="form-input-2 linha2">
                <Input 
                    className={errors.password ? "error" : ""}
                    label="Senha:" 
                    type="password" 
                    name="password" 
                    placeholder={errors.password ? errors.password.message : "Digite sua senha"} 
                    register={{...register('password', {required: "A senha é obrigatória!",
                        minLength: {
                            value: 8,
                            message: "Aviso: A senha deve conter no mínimo 8 caracteres!"
                        }
                    })}}
                />

                <Input 
                    className={errors.confirmPassword ? "error" : ""}
                    label={"Confirmar senha:"} 
                    type="password" 
                    name="confirmPassword" 
                    placeholder={errors.confirmPassword ? errors.confirmPassword.message : "Digite sua senha"} 
                    register={{...register('confirmPassword', {required: "Confirmação de senha é obrigatório!",
                        validate: (value, {password}) => value === password || "Aviso: As senhas não coincidem!"
                    })}}
                />

                <Input 
                    className={errors.birthDate ? "error" : ""}
                    label="Data de nascimento:" 
                    type="date" 
                    name="birthDate" 
                    register={{...register('bithDate', {required: "O campo de data de nascimento é obrigatório"
                    })}}
                />
            </div>
            <div className="content-errors">
                {errors.birthDate && <p>{errors.birthDate.message}</p>}
                {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <EnterButton className="linha3" type="submit">Enviar</ EnterButton>
        </form>
    </>
    )
}

export default FormRegister;