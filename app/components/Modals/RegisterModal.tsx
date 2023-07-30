'use client';
import Modal from "./Modal";
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Heading from "../Heading";
import Input from "../Inputs/Input";

const RegisterModal = () => {
    const registerModal = useRegisterModal()
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        fetch('/api/register', {
            method: "POST",
            body: JSON.stringify(data)
        })
            .then(() => {
                registerModal.onClose()
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }
    
    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
                title="Welcome to Airbnb"
                subtitle="Create an account"
            />
            <Input 
                register={register}
                label="Email"
                id="email"
                disabled={isLoading}
                errors={errors}
                required
            />
        </div>
    )

    return ( 
        <Modal 
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
     );
}
 
export default RegisterModal;