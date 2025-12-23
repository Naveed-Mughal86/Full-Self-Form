import { Injectable, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

@Injectable()
export class SupabaseService{
    public readonly supabaseClient: SupabaseClient;
    private readonly logger = new Logger(SupabaseService.name);

    constructor(private configService: ConfigService){
        const supabaseUrl = this.configService.get('SUPABASE_URL');
        const supabaseKey = this.configService.get('SUPABASE_ANON_KEY');

        this.supabaseClient = createClient(supabaseUrl,supabaseKey);
        this.logger.log("Supabase Client Initialized")
    }
    get client(){
        return this.supabaseClient;
    }
}