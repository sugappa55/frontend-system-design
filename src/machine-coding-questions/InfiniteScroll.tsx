/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';
import { throttle } from '../utils';

const InfiniteScroll = ({ children, onScrolledToTheEnd }: { children: ReactNode; onScrolledToTheEnd: () => void }) => {
  return (
    <div
      className='h-[50vh] border border-red-600 p-4 overflow-auto'
      onScroll={throttle(e => {
        console.count();
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        if (scrollTop + clientHeight >= scrollHeight) onScrolledToTheEnd();
      })}>
      {children}
    </div>
  );
};

export const InfiniteScrollPreview = () => {
  return (
    <InfiniteScroll onScrolledToTheEnd={() => console.log('At the end')}>
      <>
        {new Array(20).fill(0).map((_, i) => (
          <div className='w-[300px] h-[5vh] px-4 py-2 text-center border my-2 '>Div - {i + 1}</div>
        ))}
      </>
    </InfiniteScroll>
  );
};
