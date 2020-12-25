import { Module } from '@nestjs/common';
import { DiscordEnvModule } from './discord-env/discord-env.module';
import { NodeEnvModule } from './node-env/node-env.module';
import { AppEnvModule } from './app-env/app-env.module';

@Module({
  imports: [DiscordEnvModule, AppEnvModule],
  exports: [DiscordEnvModule, AppEnvModule],
})
export class FullEnvModule {}
