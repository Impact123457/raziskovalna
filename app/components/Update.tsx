'use client'

import { useState, useActionState } from "react"
import { profileSchema } from "@/lib/validation"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { UserType } from '../(root)/user/editProfile/[id]/page'
import { UpdateProfile } from "@/lib/actions"
import { toast } from "sonner";

export default function Update({user}: {user: UserType}){

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [name, setName] = useState(user.name|| "");
    const [surname, setSurname] = useState(user.surname || "");
    const [file, setFile] = useState(user.image);

    function handleFile(file: File) {
        const url = URL.createObjectURL(file); // takoj dobiš preview
        setFile(url);
    }
    const router = useRouter();
    
    const handleFormSubmit = async (prevState: any, formData: FormData) => {
            try{
                let formValues;
                if(file == user.image){
                    formValues = {
                    name: formData.get("name") as string,
                    surname: formData.get("surname") as string,
                    }
                }
                else{
                    formValues = {
                    name: formData.get("name") as string,
                    surname: formData.get("surname") as string,
                    file: formData.get("file") as File
                    }
                }
            await profileSchema.parseAsync(formValues);
            const result = await UpdateProfile(prevState, formData, user._id);  
                if(result.status == 'SUCCESS'){
                    toast.success("Your profile was updated succesfully!")
                }
                router.push(`/user/${user?._id}`);
            }
            catch (error){
                if(error instanceof z.ZodError){
                    const fieldErrors = error.flatten().fieldErrors;
                    
                    setErrors(fieldErrors as unknown as Record<string, string>);

                    console.log("\n \n \n \n \n",error , "\n \n \n \n \n");

                    toast.error("Please check your inputs and try again.");
                    return {...prevState, error: 'Updating failed', status:'ERROR'};
                }
                toast.error("Unexpected error.");
                return {...prevState, error: 'unexpected error', status: 'ERROR'};
            } 
        };

    const [state, formAction, isPending] = useActionState(handleFormSubmit,
        {
        error : '',
        status: 'INITIAL',
        }
    );

  return (
    <section className="signSection">
        <div className="w-full max-w-sm rounded-2xl p-8 backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30">
            <h2 className="text-2xl font-semibold text-center text-white p-3">
                Edit profile
            </h2>
            <form action={formAction}>
                    <label className="text-white/70 my-5" htmlFor="name">
                        Name:
                    </label>
                    <input 
                        id='name' 
                        name='name' 
                        className='input' 
                        placeholder='name' 
                        value={name} onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <p className='comment-form-error'>{errors.name}</p>}

                    <label className="text-white/70 my-5" htmlFor="surname">
                        Surname:
                    </label>
                    <input 
                        id='surname' 
                        name='surname' 
                        className='input' 
                        placeholder='surname' 
                        value={surname} onChange={(e) => setSurname(e.target.value)}
                    />
                    {errors.surname && <p className='comment-form-error'>{errors.surname}</p>}

                    <label className="text-white/70 my-5" htmlFor="file">
                        Image:
                    </label>
                    <div className="relative">
                    <div className="w-[100px] h-[100px] rounded-full" style={{backgroundImage: `url('${file}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <input 
                            type='file'
                            id='file'
                            accept=".png,.jpg,.jpeg"
                            name='file'
                            className='w-[100px] h-[100px] items-center px-3 py-2 text-sm border-3 absolute inset-0 text-transparent border-textprimary hover:bg-black/50 rounded-full'
                            placeholder='file'
                            onChange={(e) => {
                            const f = e.target.files?.[0];
                            if (f) handleFile(f);
                            }}
                        />
                    {errors.file && <p className='comment-form-error'>{errors.file}</p>}
                    </div>
                <button type='submit' className="logButton my-3" disabled={isPending}>
                    {isPending ? 'Submitting...' : 'Update profile'}
                </button>
            </form>
        </div>
    </section>
  )
}