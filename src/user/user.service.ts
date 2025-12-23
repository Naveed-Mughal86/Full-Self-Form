import { Injectable } from "@nestjs/common";
import { SupabaseService } from "src/supabase/supabase.service";

@Injectable({})
export class UsersService{
    constructor(private readonly supabaseService: SupabaseService){}

    async testConnection(){
        console.log("Attempting Supabase Connection...")
        const {data, error} = await this.supabaseService.supabaseClient
        .from('users')
        .select('*')
        .limit(10);

        if(error){
            console.log("Supabase Query Error...", error.message);
            throw new Error("Failed to fetch users")
        }
        return {connected: true, database_response: data};
    }
}