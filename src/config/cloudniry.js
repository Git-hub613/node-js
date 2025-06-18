
import { v2 as cloudinary } from 'cloudinary';
 const cloudinaryConnect = async ()=>{
    const name = 'dsjmqk7ew'
    const key = '814694424917678'
    const secret = 'ltyrljVPu3XeDSMiVSiMAoAhj2o'
    cloudinary.config({ 
        cloud_name: name, 
        api_key: key, 
        api_secret: secret
    });
 }

 export default cloudinaryConnect;
