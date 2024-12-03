import { useRef, MouseEvent } from 'react';
import { throttle } from '../utils';

const CursorFollower = () => {
  const childRef = useRef<HTMLDivElement | null>(null);

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    if (childRef.current) {
      childRef.current.style.left = `${clientX - 2}px`;
      childRef.current.style.top = `${clientY - 2}px`;
    }
  };

  return (
    <div className='w-screen h-screen relative' onMouseMove={throttle(onMouseMove, 100)}>
      <div className='h-8 w-8 rounded-full bg-green-600 absolute transition-all ease-linear' ref={childRef}></div>
    </div>
  );
};

export default CursorFollower;
