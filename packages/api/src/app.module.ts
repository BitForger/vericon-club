import { Global, HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FullEnvModule } from '@api/env/full-env.module';
import { ControllersModule } from '@api/controllers/controllers.module';
import { DiscordEnvModule } from '@api/env/discord-env/discord-env.module';
import { AppEnvModule } from '@api/env/app-env/app-env.module';
import { NodeEnvModule } from '@api/env/node-env/node-env.module';

@Global()
@Module({
  imports: [
    HttpModule,
    DiscordEnvModule,
    AppEnvModule,
    NodeEnvModule,
    ControllersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppModule],
})
export class AppModule {}
