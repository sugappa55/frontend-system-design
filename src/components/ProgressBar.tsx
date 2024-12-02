const ProgressBar = ({ value = 0 }: { value: number }) => {
  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <div>Progress bar</div>
      <div className='w-[400px] rounded-lg border border-gray-400 overflow-hidden h-[25px] relative'    >
        <span className='absolute w-full justify-center flex z-10' style={{ color: value > 49 ? 'white' : 'green' }}>
          {value}%
        </span>
        <div
          className={` bg-green-600 h-full origin-left`}
          style={{ transform: `scaleX(${value / 100})` }}
          role='progressbar'
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={value}
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
