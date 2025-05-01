import { ScanResultData } from '../types/types';

// This function generates mock scan results for demonstration purposes
// In a real application, this would be replaced with actual scanning logic
export const performMockScan = (url: string): Promise<ScanResultData> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      const domain = new URL(url).hostname;
      
      // Create trackers based on the domain
      const trackers = generateMockTrackers(domain);
      
      // Create cookies
      const cookies = generateMockCookies(domain);
      
      // Create fingerprinting techniques
      const fingerprintingTechniques = generateMockFingerprintingTechniques();
      
      // Calculate privacy score
      const privacyDetails = {
        trackers: calculateTrackerScore(trackers),
        thirdPartyCookies: calculateCookieScore(cookies),
        fingerprinting: calculateFingerprintingScore(fingerprintingTechniques),
        encryption: 2, // Assuming HTTPS is used
        dataMinimization: Math.floor(Math.random() * 3) - 1, // Random score between -1 and 1
        transparency: Math.floor(Math.random() * 3) - 1, // Random score between -1 and 1
      };
      
      const privacyScore = calculateOverallScore(privacyDetails);
      
      resolve({
        trackers,
        cookies,
        fingerprintingTechniques,
        privacyScore,
        privacyDetails,
      });
    }, 2000); // 2 second delay to simulate processing
  });
};

// Helper function to generate mock trackers
const generateMockTrackers = (domain: string) => {
  const commonTrackers = [
    {
      name: 'Google Analytics',
      domain: 'google-analytics.com',
      category: 'Analytics',
      purpose: 'Tracks user behavior on the website to improve user experience and analyze traffic.',
    },
    {
      name: 'Facebook Pixel',
      domain: 'facebook.com',
      category: 'Advertising',
      purpose: 'Tracks conversions and targets ads to people who have visited the website.',
    },
    {
      name: 'Google Tag Manager',
      domain: 'googletagmanager.com',
      category: 'Tag Manager',
      purpose: 'Manages various JavaScript tags used for analytics and marketing.',
    },
    {
      name: 'DoubleClick',
      domain: 'doubleclick.net',
      category: 'Advertising',
      purpose: 'Serves targeted advertisements based on user browsing behavior.',
    },
    {
      name: 'Twitter Advertising',
      domain: 'twitter.com',
      category: 'Social Media',
      purpose: 'Tracks user interaction for targeted advertising on Twitter.',
    },
    {
      name: 'HotJar',
      domain: 'hotjar.com',
      category: 'Analytics',
      purpose: 'Records user sessions to analyze user behavior and identify usability issues.',
    },
    {
      name: 'LinkedIn Insight',
      domain: 'linkedin.com',
      category: 'Social Media',
      purpose: 'Tracks conversions and provides insights about LinkedIn ad campaigns.',
    },
  ];
  
  // Select a random number of trackers
  const numTrackers = Math.floor(Math.random() * 5) + 2; // 2 to 6 trackers
  const selectedTrackers = [...commonTrackers]
    .sort(() => 0.5 - Math.random())
    .slice(0, numTrackers);
  
  // Add a domain-specific tracker
  selectedTrackers.push({
    name: `${domain} Analytics`,
    domain,
    category: 'First-Party Analytics',
    purpose: 'Custom analytics tracking specific to this website.',
  });
  
  return selectedTrackers;
};

// Helper function to generate mock cookies
const generateMockCookies = (domain: string) => {
  const essentialCookies = [
    {
      name: 'session_id',
      domain,
      type: 'Essential',
      thirdParty: false,
      expiration: 'Session',
      purpose: 'Maintains session state for authenticated users.',
    },
    {
      name: 'csrf_token',
      domain,
      type: 'Essential',
      thirdParty: false,
      expiration: 'Session',
      purpose: 'Protects against Cross-Site Request Forgery attacks.',
    },
  ];
  
  const preferenceCookies = [
    {
      name: 'theme',
      domain,
      type: 'Preferences',
      thirdParty: false,
      expiration: '1 year',
      purpose: 'Remembers user preference for site theme.',
    },
    {
      name: 'language',
      domain,
      type: 'Preferences',
      thirdParty: false,
      expiration: '1 year',
      purpose: 'Stores user language preference.',
    },
  ];
  
  const analyticsCookies = [
    {
      name: '_ga',
      domain: 'google-analytics.com',
      type: 'Analytics',
      thirdParty: true,
      expiration: '2 years',
      purpose: 'Distinguishes users for Google Analytics.',
    },
    {
      name: '_gid',
      domain: 'google-analytics.com',
      type: 'Analytics',
      thirdParty: true,
      expiration: '24 hours',
      purpose: 'Identifies unique users for Google Analytics.',
    },
  ];
  
  const marketingCookies = [
    {
      name: '_fbp',
      domain: 'facebook.com',
      type: 'Marketing',
      thirdParty: true,
      expiration: '3 months',
      purpose: 'Used by Facebook for tracking and ad delivery.',
    },
    {
      name: 'IDE',
      domain: 'doubleclick.net',
      type: 'Marketing',
      thirdParty: true,
      expiration: '1 year',
      purpose: 'Used by Google DoubleClick for targeting advertisements.',
    },
    {
      name: 'personalization_id',
      domain: 'twitter.com',
      type: 'Marketing',
      thirdParty: true,
      expiration: '2 years',
      purpose: 'Used by Twitter for tracking and ad delivery.',
    },
  ];
  
  // Randomly decide how many of each type to include
  const useAnalytics = Math.random() > 0.2; // 80% chance
  const useMarketing = Math.random() > 0.3; // 70% chance
  
  let cookies = [...essentialCookies];
  
  // Maybe include preference cookies
  if (Math.random() > 0.4) {
    cookies = [...cookies, ...preferenceCookies];
  }
  
  // Maybe include analytics cookies
  if (useAnalytics) {
    cookies = [...cookies, ...analyticsCookies];
  }
  
  // Maybe include marketing cookies
  if (useMarketing) {
    const numMarketingCookies = Math.floor(Math.random() * marketingCookies.length) + 1;
    cookies = [...cookies, ...marketingCookies.slice(0, numMarketingCookies)];
  }
  
  return cookies;
};

// Helper function to generate mock fingerprinting techniques
const generateMockFingerprintingTechniques = () => {
  const fingerprintingTechniques = [
    {
      name: 'Canvas Fingerprinting',
      detected: Math.random() > 0.5,
      description: 'Uses HTML5 Canvas to generate a unique identifier by drawing invisible images.',
      privacyImpact: 'High',
    },
    {
      name: 'WebGL Fingerprinting',
      detected: Math.random() > 0.6,
      description: 'Leverages WebGL rendering quirks specific to your graphics hardware and drivers.',
      privacyImpact: 'High',
    },
    {
      name: 'Audio Fingerprinting',
      detected: Math.random() > 0.7,
      description: 'Analyses how your device processes audio to create a unique identifier.',
      privacyImpact: 'Medium',
    },
    {
      name: 'Font Detection',
      detected: Math.random() > 0.4,
      description: 'Checks which fonts are installed on your device to create an identifier.',
      privacyImpact: 'Medium',
    },
    {
      name: 'Browser Plugin Enumeration',
      detected: Math.random() > 0.5,
      description: 'Collects information about installed browser plugins and extensions.',
      privacyImpact: 'Medium',
    },
    {
      name: 'Hardware Sensor Access',
      detected: Math.random() > 0.8,
      description: 'Accesses device sensors like accelerometer or gyroscope for identification.',
      privacyImpact: 'High',
    },
  ];
  
  return fingerprintingTechniques;
};

// Helper function to calculate tracker score
const calculateTrackerScore = (trackers: any[]) => {
  const trackerCount = trackers.length;
  
  if (trackerCount <= 2) return 1;
  if (trackerCount <= 4) return 0;
  if (trackerCount <= 6) return -1;
  return -2;
};

// Helper function to calculate cookie score
const calculateCookieScore = (cookies: any[]) => {
  const thirdPartyCookies = cookies.filter(cookie => cookie.thirdParty);
  const marketingCookies = cookies.filter(cookie => cookie.type === 'Marketing');
  
  const score = thirdPartyCookies.length + marketingCookies.length;
  
  if (score === 0) return 2;
  if (score <= 2) return 1;
  if (score <= 4) return 0;
  if (score <= 6) return -1;
  return -2;
};

// Helper function to calculate fingerprinting score
const calculateFingerprintingScore = (techniques: any[]) => {
  const detectedTechniques = techniques.filter(tech => tech.detected);
  const highImpactTechniques = detectedTechniques.filter(tech => tech.privacyImpact === 'High');
  
  if (detectedTechniques.length === 0) return 2;
  if (highImpactTechniques.length === 0 && detectedTechniques.length <= 2) return 1;
  if (highImpactTechniques.length <= 1 && detectedTechniques.length <= 3) return 0;
  if (highImpactTechniques.length <= 2) return -1;
  return -2;
};

// Helper function to calculate overall privacy score
const calculateOverallScore = (details: any) => {
  const factors = Object.values(details) as number[];
  const sum = factors.reduce((acc, val) => acc + val, 0);
  
  // Scale to 1-10 (add 12 to get 0-12 range, then scale to 1-10)
  let score = Math.round(((sum + 12) / 24) * 9) + 1;
  
  // Ensure score is between 1 and 10
  return Math.max(1, Math.min(10, score));
};