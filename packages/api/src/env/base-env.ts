import { Injectable } from '@nestjs/common';
import { resolve } from 'path';

@Injectable()
export class BaseEnv {
  protected get DOT_ENV_PATH() {
    return resolve(__dirname, '../../../', '.env');
  }
  constructor() {}
}
