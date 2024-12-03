import { useEffect, useRef, useState } from 'react';

const config = [1, 1, 1, 1, 0, 1, 1, 1, 1];
const initState = new Array(9).fill(false);

const GridLights = () => {
  const [state, setState] = useState<boolean[]>(initState);
  const orderRef = useRef<number[]>([]);
  const isGridFull = useRef(false);

  useEffect(() => {
    if (!isGridFull.current) return;
    const id = setInterval(() => {
      if (!orderRef.current.length) {
        clearInterval(id);
        isGridFull.current = false;
      }
      const copy = [...state];
      copy[orderRef.current[orderRef.current.length - 1]] = false;
      setState(copy);
      orderRef.current.pop();
    }, 300);

    return () => clearInterval(id);
  }, [state]);

  const onClick = (i: number) => {
    orderRef.current.push(i);
    if (orderRef.current.length === 8) isGridFull.current = true;
    setState(p => {
      const copy = [...p];
      copy[i] = true;
      return copy;
    });
  };

  return (
    <div className='border border-blue-600 grid grid-cols-3 gap-2 p-4'>
      {config.map((val, i) =>
        val ? (
          <div
            className='w-20 h-20 border border-blue-600 transition-colors ease-in'
            style={{ backgroundColor: state[i] ? 'blue' : 'white' }}
            onClick={() => onClick(i)}
          />
        ) : (
          <span />
        )
      )}
    </div>
  );
};

export default GridLights;
