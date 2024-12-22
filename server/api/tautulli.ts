export interface TautulliHistoryRecord {
  date: number;
  duration: number;
  friendly_name: string;
  full_title: string;
  grandparent_rating_key: number;
  grandparent_title: string;
  original_title: string;
  group_count: number;
  group_ids?: string;
  guid: string;
  ip_address: string;
  live: number;
  machine_id: string;
  media_index: number;
  media_type: string;
  originally_available_at: string;
  parent_media_index: number;
  parent_rating_key: number;
  parent_title: string;
  paused_counter: number;
  percent_complete: number;
  platform: string;
  product: string;
  player: string;
  rating_key: number;
  reference_id?: number;
  row_id?: number;
  session_key?: string;
  started: number;
  state?: string;
  stopped: number;
  thumb: string;
  title: string;
  transcode_decision: string;
  user: string;
  user_id: number;
  watched_status: number;
  year: number;
}

interface TautulliHistoryResponse {
  response: {
    result: string;
    message?: string;
    data: {
      draw: number;
      recordsTotal: number;
      recordsFiltered: number;
      total_duration: string;
      filter_duration: string;
      data: TautulliHistoryRecord[];
    };
  };
}

interface TautulliWatchStats {
  query_days: number;
  total_time: number;
  total_plays: number;
}

interface TautulliWatchStatsResponse {
  response: {
    result: string;
    message?: string;
    data: TautulliWatchStats[];
  };
}

interface TautulliWatchUser {
  friendly_name: string;
  user_id: number;
  user_thumb: string;
  username: string;
  total_plays: number;
  total_time: number;
}

interface TautulliWatchUsersResponse {
  response: {
    result: string;
    message?: string;
    data: TautulliWatchUser[];
  };
}

interface TautulliInfo {
  tautulli_install_type: string;
  tautulli_version: string;
  tautulli_branch: string;
  tautulli_commit: string;
  tautulli_platform: string;
  tautulli_platform_release: string;
  tautulli_platform_version: string;
  tautulli_platform_linux_distro: string;
  tautulli_platform_device_name: string;
  tautulli_python_version: string;
}

interface TautulliInfoResponse {
  response: {
    result: string;
    message?: string;
    data: TautulliInfo;
  };
}