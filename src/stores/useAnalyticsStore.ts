import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Analysis {
  id: string;
  thumbnail: string;
  date: string;
  congestion: string;
  vehicleCount: number;
}

interface AnalyticsState {
  imagesAnalyzed: number;
  averageCongestion: number;
  recentCongestionLevel: string;
  recentAnalyses: Analysis[];
  addAnalysis: (analysis: Analysis) => void;
  updateMetrics: () => void;
}

export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set, get) => ({
      imagesAnalyzed: 0,
      averageCongestion: 0,
      recentCongestionLevel: '0%',
      recentAnalyses: [],

      addAnalysis: (analysis: Analysis) => {
        set((state) => {
          const newAnalyses = [analysis, ...state.recentAnalyses].slice(0, 5);
          return {
            recentAnalyses: newAnalyses,
            imagesAnalyzed: state.imagesAnalyzed + 1,
          };
        });
        get().updateMetrics();
      },

      updateMetrics: () => {
        const { recentAnalyses } = get();
        if (recentAnalyses.length === 0) return;

        const congestionValues = recentAnalyses.map(
          (a) => parseInt(a.congestion.replace('%', ''))
        );
        
        const avgCongestion = Math.round(
          congestionValues.reduce((a, b) => a + b, 0) / congestionValues.length
        );
        
        const recentCongestion = congestionValues[0];
        let congestionLevel = 'Low';
        if (recentCongestion > 70) congestionLevel = 'High';
        else if (recentCongestion > 40) congestionLevel = 'Medium';

        set({
          averageCongestion: avgCongestion,
          recentCongestionLevel: `${recentCongestion}%`,
        });
      },
    }),
    {
      name: 'traffic-analytics',
    }
  )
);