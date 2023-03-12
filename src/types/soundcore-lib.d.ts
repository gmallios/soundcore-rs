/*
 Generated by typeshare 1.0.0
*/

export interface DeviceInfo {
	left_fw: string;
	right_fw: string;
	sn: string;
}

export interface DeviceStatus {
	host_device: number;
	tws_status: boolean;
	battery_level: BatteryLevel;
	battery_charging: BatteryCharging;
	anc_status: ANCProfile;
	side_tone_enabled: boolean;
	wear_detection_enabled: boolean;
	touch_tone_enabled: boolean;
	left_eq: EQWave;
	right_eq: EQWave;
	hearid_enabled: boolean;
	left_hearid: EQWave;
	right_hearid: EQWave;
	left_hearid_customdata: EQWave;
	right_hearid_customdata: EQWave;
}

export interface BatteryCharging {
	left: boolean;
	right: boolean;
}

export interface BatteryLevel {
	left: number;
	right: number;
}

export interface ANCProfile {
	option: number;
	anc_option: number;
	transparency_option: number;
	anc_custom: number;
}

export enum SupportedModels {
	A3027 = "A3027",
	A3028 = "A3028",
	A3029 = "A3029",
	A3040 = "A3040",
	A3935 = "A3935",
	A3951 = "A3951",
}
