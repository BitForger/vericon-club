import { Role } from './role';
import { Emoji } from './emoji';
import { VoiceState } from './voice-state';
import { GuildChannel } from './channel';
import { GuildMember } from './member';
import { GuildPresence } from './presence';

export interface Guild {
  id: string;
  name: string;
  icon?: string;
  icon_hash?: string;
  splash?: string;
  discovery_splash?: string;
  owner?: boolean;
  owner_id: string;
  permissions?: string;
  region: string;
  afk_channel_id?: string;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: string;
  verification_level: number;
  default_message_notifications: number;
  explicit_content_filter: number;
  roles: Role[];
  emojis: Emoji[];
  features: [
    'INVITE_SPLASH',
    'VIP_REGIONS',
    'VANITY_URL',
    'VERIFIED',
    'PARTNERED',
    'COMMUNITY',
    'COMMERCE',
    'NEWS',
    'DISCOVERABLE',
    'FEATURABLE',
    'ANIMATED_ICON',
    'BANNER',
    'WELCOME_SCREEN_ENABLED',
  ];
  mfa_level: number;
  application_id?: string;
  system_channel_id?: string;
  system_channel_flags: number;
  rules_channel_id?: string;
  joined_at?: string;
  large?: boolean;
  unavailable?: boolean;
  member_count?: number;
  voice_states?: VoiceState[];
  members?: GuildMember[];
  channels?: GuildChannel[];
  presences?: GuildPresence[];
  max_presences?: number;
  max_members?: number;
  description?: string;
  banner?: string;
  premium_tier: number;
  premium_subscription_count?: number;
  preferred_locale: string;
  public_updates_channel_id?: string;
  max_video_channel_users?: number;
  approximate_member_count?: number;
  approximate_presence_count?: number;
}
