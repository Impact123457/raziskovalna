'use server'

import { auth } from "@/auth"
import { parseServerActionResponse } from "./utils"
import { writeClient } from "@/sanity/lib/write-client";

//za update profile:
export const UpdateProfile= async (state: any, form: FormData, _id: string) =>{
    const session = await auth();

    if(!session) return parseServerActionResponse({
        error: 'Not singed in',
        status: 'Error',

    });
    const name = form.get("name") as string;
    const surname = form.get("surname") as string;
    let file = form.get("file") as File | null;

    if(file && file.size <= 0){
        file = null;
    }
    try{
        let result;
        if(file){
            console.log('Uploading file:', file.name, file.size);
            const buffer = Buffer.from(await file.arrayBuffer());

            const uploadedAsset = await writeClient.assets.upload('image', buffer, {
                filename: file.name,
            });
            console.log('Uploaded asset:', uploadedAsset._id);

                result = await writeClient.patch(_id).set({
                name,
                surname,
                image: {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: uploadedAsset._id,
                    },
                },
            }).commit();
            console.log('Patched with image:', result);
        }
        else{
            console.log('No file, patching name and surname only');
            result = await writeClient.patch(_id).set({
            name,
            surname,
            }).commit();
            console.log('Patched without image:', result);
        }
        return parseServerActionResponse({
            ...result,
            error: '',
            status: 'SUCCESS'
        })
    }
    catch(error){
        console.log('Error in UpdateProfile:', error);

        return parseServerActionResponse({
            error: JSON.stringify(error),
            status: 'ERROR'
        });
    }
}