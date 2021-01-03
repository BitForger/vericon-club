import { User } from './member';
import { Emoji } from './emoji';

export interface GuildPresence {
  user?: User;
  guild_id?: string;
  status?: string;
  activities: GuildPresenceActivity[];
  client_status: {
    desktop?: string;
    mobile?: string;
    web?: string;
  };
}

export interface GuildPresenceActivity {
  name?: string;
  type?: number;
  url?: string;
  created_at?: number;
  timestamps: {};
  application_id?: string;
  details?: string;
  state?: string;
  emoji?: Emoji;
  party?: Party;
  assets?: Asset;
  secrets?: Secret;
  instance?: boolean;
  flags?: number;
}

export interface Party {
  id?: string;
  size?: [number, number];
}

export interface Asset {
  large_image?: string;
  large_text?: string;
  small_image?: string;
  small_text?: string;
}

export interface Secret {
  join?: string;
  spectate?: string;
  match?: string;
}
