import { Injectable } from '@nestjs/common';
import { BaseEnv } from '../base-env';
import { CleanEnv, cleanEnv, str } from 'envalid';
import * as process from 'process';

interface NODE extends CleanEnv {
  NODE_ENV: string;
}

export const NodeEnvValidationObj = {
  NODE_ENV: str({
    choices: ['production', 'development', 'test', 'staging'],
    devDefault: 'development',
  }),
};

@Injectable()
export class NodeEnv extends BaseEnv {
  private env: NODE;
  constructor() {
    super();
    this.env = cleanEnv(process.env, NodeEnvValidationObj, {
      dotEnvPath: this.DOT_ENV_PATH,
    });
  }

  get isProduction() {
    return this.env.isProduction;
  }

  get isDev() {
    return this.env.isDev;
  }

  get isTest() {
    return this.env.isTest;
  }
}
