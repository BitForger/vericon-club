import { Module } from '@nestjs/common';
import { NodeEnv } from '@api/env/node-env/node.env';

@Module({
  providers: [NodeEnv],
  exports: [NodeEnv],
})
export class NodeEnvModule {}
