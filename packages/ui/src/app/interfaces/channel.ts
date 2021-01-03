import { User } from './member';

export interface GuildChannel {
  id?: string;
  type: number;
  guild_id?: string;
  position?: number;
  permission_overwrites?: GuildChannelOverwrite[];
  name?: string;
  topic?: string;
  nsfw?: boolean;
  last_message_id?: string;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user?: number;
  recipients?: User[];
  icon?: string;
  owner_id?: string;
  application_id?: string;
  parent_id?: string;
  last_pin_timestamp?: string;
}

export interface GuildChannelOverwrite {
  id?: string;
  type?: number;
  allow?: string;
  deny?: string;
}
