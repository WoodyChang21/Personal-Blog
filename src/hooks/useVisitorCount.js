import { useEffect, useState } from 'react';

const COUNTER_KEY = 'woodychang.ai::visitor-count';
const STORAGE_KEY = 'visitor_counted_yyyymmdd';

function getTodayStamp() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');

  return `${year}${month}${day}`;
}

export function useVisitorCount() {
  const [visitorCount, setVisitorCount] = useState('Loading...');

  useEffect(() => {
    let isMounted = true;

    async function updateVisitorCount() {
      let shouldHit = false;

      try {
        const lastCounted = localStorage.getItem(STORAGE_KEY);
        if (lastCounted !== getTodayStamp()) {
          shouldHit = true;
          localStorage.setItem(STORAGE_KEY, getTodayStamp());
        }
      } catch {
        shouldHit = true;
      }

      try {
        if (shouldHit) {
          const hitResponse = await fetch('https://countapi.maayanlab.cloud/rpc/hit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key: COUNTER_KEY }),
          });

          if (!hitResponse.ok) {
            throw new Error(`Hit failed with HTTP ${hitResponse.status}`);
          }
        }

        const getResponse = await fetch(
          `https://countapi.maayanlab.cloud/rpc/get?key=${encodeURIComponent(COUNTER_KEY)}`,
        );

        if (!getResponse.ok) {
          throw new Error(`Get failed with HTTP ${getResponse.status}`);
        }

        const data = await getResponse.json();
        const value =
          typeof data === 'number'
            ? data
            : typeof data?.[0]?.get === 'number'
              ? data[0].get
              : typeof data?.value === 'number'
                ? data.value
                : 0;

        if (isMounted) {
          setVisitorCount(value.toLocaleString());
        }
      } catch (error) {
        console.error('Visitor counter error:', error);

        if (isMounted) {
          setVisitorCount('—');
        }
      }
    }

    updateVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return visitorCount;
}
