export const SHOW_ADS = false;

const adConfig = {
  desktop: {
    left: { adUnitId: 'desktop-left-123', size: [160, 600] as [number, number] },
    right: { adUnitId: 'desktop-right-456', size: [160, 600] as [number, number] }
  },
  mobile: {
    top: { adUnitId: 'mobile-top-789', size: [320, 100] as [number, number] },
    inline: [
      { adUnitId: 'mobile-inline-1', size: [300, 250] as [number, number] },
      { adUnitId: 'mobile-inline-2', size: [300, 250] as [number, number] }
    ]
  }
};

export default adConfig; 