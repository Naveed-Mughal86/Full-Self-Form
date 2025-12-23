import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { SupabaseService } from "src/supabase/supabase.service";

@Injectable()
export class AuthService{
    constructor(private readonly supabaseService: SupabaseService){}

    async signUp(email: string, password:string){
        const {data, error} = await this.supabaseService.client.auth.signUp({
            email: email,
            password: password,
        });

        if(error) throw new BadRequestException(error.message)
            return data;
    }

    async signIn(email:string, password: string){
        const {data, error} = await this.supabaseService.client.auth.signInWithPassword({
            email: email,
            password: password
        });

        if(error) throw new UnauthorizedException('Invalid Credentials')
            return data;
    }

    async forgotPassword(email:string){
         const redirectToUrl = 'http://localhost:5173/reset-password'
        const {data, error} = await this.supabaseService.client.auth.resetPasswordForEmail(
            email,{
                redirectTo: redirectToUrl,
            }
        );
        if(error) throw new BadRequestException("Email not Recognized",error.message)
            return data;
    }
}