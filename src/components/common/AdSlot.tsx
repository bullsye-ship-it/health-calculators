import React, { useEffect, useRef, useState } from 'react';
import { SHOW_ADS } from './adConfig';

interface AdSlotProps {
  adUnitId: string;
  size: [number, number];
  position: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ adUnitId, size, position }) => {
  if (!SHOW_ADS) return null;
  const [adLoaded, setAdLoaded] = useState(true);
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window && (window as any).adsbygoogle && adRef.current) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (e) {
        setAdLoaded(false);
      }
    }
  }, [adUnitId, position]);

  if (!adLoaded) return null;

  return (
    <div
      ref={adRef}
      className={`ad-slot ad-${position}`}
      style={{ width: size[0], height: size[1], margin: '16px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f5f5', borderRadius: 8 }}
    >
      {/* AdSense ad slot markup */}
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: size[0], height: size[1] }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // <-- Replace with your AdSense publisher ID
        data-ad-slot={adUnitId}
        data-ad-format="auto"
      />
    </div>
  );
};

export default AdSlot; 