import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { DiscordService } from './discord/discord.service';

@NgModule({
  providers: [AuthService, DiscordService],
  imports: [CommonModule],
})
export class ServicesModule {}
