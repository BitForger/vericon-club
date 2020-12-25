import { HttpModule, Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AppEnvModule } from '@api/env/app-env/app-env.module';
import { DiscordEnvModule } from '@api/env/discord-env/discord-env.module';

@Module({
  imports: [AppEnvModule, DiscordEnvModule, HttpModule],
  controllers: [AuthController],
})
export class ControllersModule {}
