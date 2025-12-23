import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post('signup')
    async signUp(@Body() body: {email: string, password: string}){
        if(!body || !body.email || !body.password){
            console.error("Missing Credentials",body)
            throw new BadRequestException("Missing something")
        }
        return this.authService.signUp(body.email, body.password)
    }

    @Post('signin')
    async signIn(@Body() body: {email: string, password: string}){
        if(!body || !body.email || !body.password){
            console.error("Missing Credentials",body)
            throw new BadRequestException("Missing something")
        }
        return this.authService.signIn(body.email, body.password)
    }
    
    @Post('forgot-password')
    async forgotPassword(@Body() body: {email: string}){
        if(!body || !body.email){
            console.error("Missing Email", body)
        }
        return this.authService.forgotPassword(body.email)
    }
    
}