import React, { useState } from 'react';
import Header from './components/Header';
import URLForm from './components/URLForm';
import ScanResults from './components/ScanResults';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import { ScanResultData } from './types/types';
import { performMockScan } from './services/mockScanService';

function App() {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<ScanResultData | null>(null);
  const [scannedUrl, setScannedUrl] = useState('');

  const handleScan = async (url: string) => {
    setScanning(true);
    setResults(null);
    setScannedUrl(url);
    
    try {
      const scanResults = await performMockScan(url);
      setResults(scanResults);
    } catch (error) {
      console.error('Error during scanning:', error);
      // Here you would handle the error appropriately
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-white">
        <section className="relative py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Discover What Websites Know About You</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our privacy analyzer reveals trackers, cookies, and fingerprinting techniques that websites use to collect your data.
            </p>
          </div>
        </section>
        
        <URLForm onScan={handleScan} isLoading={scanning} />
        
        {results && <ScanResults results={results} url={scannedUrl} />}
        
        <HowItWorks />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;