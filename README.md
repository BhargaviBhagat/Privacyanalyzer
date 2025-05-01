*Privacy Analyzer for Websites*

Privacy Analyzer is a web-based tool that allows users to analyze any website’s tracking and privacy behavior. Inspired by tools like Blacklight, this project reveals how websites collect user data through trackers, cookies, and fingerprinting techniques. It aims to educate users about privacy risks and promote transparency on the web.

*Live Demo*
Access the deployed version here:  
https://privacyanalyzer.netlify.app/

## Project Overview
Privacy Analyzer enables users to enter a website URL and generates a detailed privacy report. It detects embedded trackers, analyzes cookies, and checks for common browser fingerprinting techniques. The tool is designed to provide clear, actionable insights about a website's privacy posture through a clean and interactive frontend.

## Features
- Tracker detection for known analytics and advertising domains
- First-party and third-party cookie analysis
- Fingerprinting detection, including:
  - Canvas fingerprinting
  - WebGL fingerprinting
  - AudioContext usage
  - Device enumeration
- Privacy score based on the extent of tracking mechanisms found
- Visual dashboard for displaying findings with charts and summaries
- Deployed frontend hosted on Netlify

## Technologies Used
**Frontend:**
- HTML, CSS, JavaScript
- Chart.js (for data visualization)
- Bootstrap (for UI styling)

**Backend:**
- Python
- Flask

**Automation and Analysis:**
- Selenium (headless browser automation)
- Custom scripts for network monitoring and JavaScript behavior analysis

**Deployment:**
- Netlify (frontend)
- Flask backend (for local or extendable deployment)

## Workflow

1. User submits a website URL via the frontend.
2. The backend launches a headless browser session using Selenium to visit the site.
3. All network requests, cookies, and fingerprinting-related behaviors are monitored.
4. The data is processed and matched against known tracker lists and detection logic.
5. A structured privacy report is generated.
6. The frontend receives and displays the results in a user-friendly format, including charts and tables.

