// supabase.module.ts
import { Module } from '@nestjs/common';
import { SupabaseService } from 'src/services/supabase.service';

@Module({
  providers: [SupabaseService],
  exports: [SupabaseService],
})
export class SupabaseModule {}
