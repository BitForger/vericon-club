import { GuildMember } from './member';

export interface VoiceState {
  guild_id?: string;
  channel_id?: string;
  user_id?: string;
  member?: GuildMember;
  session_id?: string;
  deaf?: boolean;
  mute?: boolean;
  self_deaf?: boolean;
  self_mute?: boolean;
  self_stream?: boolean;
  self_video?: boolean;
  suppress?: boolean;
}
