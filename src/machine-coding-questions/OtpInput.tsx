import { ChangeEvent, useEffect, useRef, useState, KeyboardEvent } from 'react';

const OtpInput = ({ length, otpValue }: { length: number; onSubmit: (otp: string) => void; otpValue?: number }) => {
  const [otp, setOtp] = useState(() => new Array(length).fill(''));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (otpValue) setOtp(otpValue.toString().split(''));
  }, [otpValue]);

  useEffect(() => {
    if (inputsRef.current[0]) inputsRef.current[0].focus();
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    const { value } = e.target;
    const copy = [...otp];
    copy[i] = value[value.length - 1];
    setOtp(copy);
    if (!!value && i < length - 1) inputsRef.current[i + 1].focus();
  };

  const onClick = (i: number) => {
    inputsRef.current[i].setSelectionRange(1, 1);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === 'Backspace' && i > 0 && !otp[i]) inputsRef.current[i - 1].focus();
  };

  return (
    <div className='flex justify-center items-center gap-4'>
      {otp.map((val, i) => (
        <input
          key={`input - ${i}`}
          ref={input => {
            return (inputsRef.current[i] = input as HTMLInputElement);
          }}
          type='text'
          className='p-4 border border-blue-600 text-blue-600 outline-none rounded-lg w-14 text-center'
          value={val}
          onChange={e => onChange(e, i)}
          onClick={() => onClick(i)}
          onKeyDown={e => onKeyDown(e, i)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
