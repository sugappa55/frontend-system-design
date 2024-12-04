import { ChangeEvent, useRef, useState } from 'react';

const data = [
  {
    label: 'Include upper case letters',
    value: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  },
  {
    label: 'Include lower case letters',
    value: 'abcdefghijklmnopqrstuvwxyz'
  },
  {
    label: 'Include numbers',
    value: '0123456789'
  },
  {
    label: 'Include symbols',
    value: '!@#$&-_.'
  }
];

function generatePassword(length: number, fromString: string) {
  let output = '';
  for (let i = 0; i <= length; i++) {
    const index = Math.ceil(Math.random() * fromString.length) - 1;
    if (fromString[index]) output += fromString[index];
  }
  return output;
}

const PasswordGenerator = () => {
  const [length, setLength] = useState(4);
  const [password, setPassword] = useState('');
  const passwordCharsContainer = useRef(new Set());
  const [copied, setCopied] = useState(false);

  const handleChangeCheckBox = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked && !passwordCharsContainer.current.has(value)) passwordCharsContainer.current.add(value);
    else passwordCharsContainer.current.delete(value);
  };

  const handleGenerate = () => {
    const targetString = Array.from(passwordCharsContainer.current).join('');
    const output = generatePassword(length, targetString);
    setPassword(output);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 600);
    });
  };

  return (
    <div className=' w-[500px] p-4 border shadow-md'>
      {/* Password */}
      <div className='flex justify-between'>
        <div className='font-bold'>{password}</div>
        <button className='p-3 border rounded-lg' onClick={handleCopy}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex justify-between'>
          <span>Character length:</span>
          <span>{length}</span>
        </div>
        <input
          type='range'
          className='w-full my-4'
          min={4}
          max={24}
          onChange={e => setLength(+e.target.value)}
          value={length}
        />
      </div>

      <div className='flex flex-wrap gap-4 my-2'>
        {data.map(elem => (
          <label className='flex items-center gap-4'>
            <input type='checkbox' value={elem.value} onChange={handleChangeCheckBox} />
            {elem.label}
          </label>
        ))}
      </div>

      <div className='flex justify-between my-2'>
        <span>Strength: </span>
        <strong>Medium</strong>
      </div>

      <button className='py-2 text-center w-full bg-teal-600' onClick={handleGenerate}>
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
