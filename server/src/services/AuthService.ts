import { urlQuerySchema } from "../schemas/AuthSchema";
import * as z from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const validUrlPassword: string = process.env.urlPassword || "UndefinedPassword";



export class AuthService {


        static checkQueryPassword(queryParams: z.infer<typeof urlQuerySchema>): boolean {
        const parsed = urlQuerySchema.safeParse(queryParams);
        
        if (!parsed.success) {
            return false;
        }
        return parsed.data.urlPassword == validUrlPassword;
    }
    
    }
    


