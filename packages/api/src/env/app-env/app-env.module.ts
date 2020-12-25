import { Module } from '@nestjs/common';
import { AppEnv } from '@api/env/app-env/app.env';

@Module({
  providers: [AppEnv],
  exports: [AppEnv],
})
export class AppEnvModule {}
