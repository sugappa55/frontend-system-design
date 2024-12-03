import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const CountDownTimer = () => {
  const [time, setTime] = useState<{
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
  }>({
    hours: '',
    minutes: '',
    seconds: ''
  });

  const [startTimer, setStartTimer] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTime({ ...time, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStartTimer(p => !p);
  };

  useEffect(() => {
    if (!startTimer) return;
    const id = setInterval(() => {
      if (!startTimer) clearInterval(id);
      let seconds = +time.hours * 60 * 60 + +time.minutes * 60 + +time.seconds;
      seconds--;
      const hours = Math.floor(seconds / (60 * 60));
      seconds = seconds % (60 * 60);
      const minutes = Math.floor(seconds / 60);
      seconds = seconds % 60;
      setTime({ hours, minutes, seconds });
      if (!seconds && !minutes && !hours) setStartTimer(false);
    }, 1000);
    return () => clearInterval(id);
  }, [time, startTimer]);

  return (
    <div className='flex gap-2'>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            max={24}
            type='number'
            placeholder='00'
            required
            value={time.hours}
            name='hours'
            onChange={handleChange}
            className='border-b-2 border-blue p-4 w-20 outline-none text-center '
          />
          :
          <input
            max={60}
            type='number'
            placeholder='00'
            required
            value={time.minutes}
            name='minutes'
            onChange={handleChange}
            className='border-b-2 border-blue p-4 w-20 outline-none text-center '
          />
          :
          <input
            max={60}
            type='number'
            placeholder='00'
            required
            value={time.seconds}
            name='seconds'
            onChange={handleChange}
            className='border-b-2 border-blue p-4 w-20 outline-none text-center '
          />
        </div>
        <div className='flex gap-4 mt-4  justify-between'>
          <button className='px-4 py-2 border rounded-lg' type='submit'>
            {!startTimer ? 'Start' : 'Stop'}
          </button>
          <button
            className='px-4 py-2 border rounded-lg'
            onClick={e => {
              e.preventDefault();
              setStartTimer(false);
            }}>
            Pause
          </button>
        </div>
      </form>
    </div>
  );
};

export default CountDownTimer;
