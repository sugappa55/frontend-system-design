import { ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { CrossIcon } from '../Icons';
import useFetch from '../hooks/useFetch';
import { debounce } from '../utils';

const MultiSelectSearch = ({
  data,
  onSearch,
  selected,
  onClearItem,
  render
}: {
  data: any[];
  onSearch: (val: string) => void;
  selected: { email: string; name: string }[];
  onClearItem: (id: string) => void;
  render: (...args: any[]) => ReactNode;
}) => {
  const [search, setSearch] = useState('');
  const onSearchItem = useCallback(debounce(onSearch), []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    onSearchItem(value);
  };

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className='w-[500px]'>
      <div className='flex relative rounded-lg items-center border border-blue-600 p-3 flex-wrap gap-x-2'>
        {selected.map(item => (
          <div className='px-3 py-2 gap-2 rounded-3xl bg-blue-600 text-white flex items-center'>
            <span>{item.name} </span>
            <button onClick={() => onClearItem(item.email)}>
              <CrossIcon className='w-4 h-4' />
            </button>
          </div>
        ))}
        <input
          className='outline-none text-blue-600 p-4'
          type='text'
          ref={inputRef}
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className=' h-[300px] overflow-scroll'>{data.map(elem => render(elem))}</div>
    </div>
  );
};

type UserDetail = { email: string; firstName: string; lastName: string; image: string };

export const MultiSelectSearchPreview = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<any[]>([]);
  const { data } = useFetch<{ users: UserDetail[] }, { q?: string }>('https://dummyjson.com/users/search', {
    ...(search && { q: search })
  });

  console.log(data?.users);
  return (
    <MultiSelectSearch
      data={data?.users || []}
      selected={selected}
      onSearch={val => setSearch(val)}
      onClearItem={() => {}}
      render={(item: UserDetail) => (
        <div
          className='flex items-center p-2 gap-2 shadow-md cursor-pointer'
          onClick={() => {
            setSelected([...selected, { email: item.email, name: item.firstName + ' ' + item.lastName }]);
          }}>
          <img src={item.image} className='w-16 h-16 rounded-full' />
          <div>
            <div>
              {item.firstName} {item.lastName}
            </div>
            <div>{item.email}</div>
          </div>
        </div>
      )}
    />
  );
};
