import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./user.service";

@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService){}

    @Get('test-connection')
    async testSupabase(){
        console.log('Attempting Supabase connection test...');
        return this.usersService.testConnection();
    }
}