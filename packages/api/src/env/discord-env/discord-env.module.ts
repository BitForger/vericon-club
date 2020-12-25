import { Module } from '@nestjs/common';
import { DiscordEnv } from './discord.env';

@Module({
  providers: [DiscordEnv],
  exports: [DiscordEnv],
})
export class DiscordEnvModule {}
