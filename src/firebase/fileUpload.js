import { storage } from "./config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const fileUpload = async (fileName) => {

    const myPreFile = await fetch(fileName)
    const myFile = await myPreFile.blob()
    
    const metadata = {
        contentType: myFile.type
    };
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, myFile, metadata);

    const uploadPromise = new Promise(res => {
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':                        
                        break;
                }
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    res(downloadURL)
                });
            }
        );
    })

    return await uploadPromise