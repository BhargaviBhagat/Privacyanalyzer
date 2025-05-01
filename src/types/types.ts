export interface Tracker {
  name: string;
  domain: string;
  category: string;
  purpose: string;
}

export interface Cookie {
  name: string;
  domain: string;
  type: string;
  thirdParty: boolean;
  expiration: string;
  purpose: string;
}

export interface FingerprintingTechnique {
  name: string;
  detected: boolean;
  description: string;
  privacyImpact: string;
}

export interface PrivacyScoreDetails {
  trackers: number;
  thirdPartyCookies: number;
  fingerprinting: number;
  encryption: number;
  dataMinimization: number;
  transparency: number;
}

export interface ScanResultData {
  trackers: Tracker[];
  cookies: Cookie[];
  fingerprintingTechniques: FingerprintingTechnique[];
  privacyScore: number;
  privacyDetails: PrivacyScoreDetails;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}