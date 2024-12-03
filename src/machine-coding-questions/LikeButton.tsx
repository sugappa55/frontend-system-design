import { useState } from 'react';
import { HeartIcon, SpinnerIcon } from '../Icons';
import { useMutation } from '../hooks/useMutation';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const { loading, error, mutationFunction } = useMutation('https://www.greatfrontend.com/api/questions/like-button');

  const onClick = () => {
    mutationFunction({ action: liked ? 'unlike' : 'like' }).then(() => setLiked(!liked));
  };

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <button
        className={`flex w-fit px-4 py-2 justify-center items-center rounded-xl gap-2 font-bold  transition-colors ${
          liked ? ' text-white ' : ' border-4 text-gray-600 border-gray-600 hover:text-red-600 hover:border-red-600'
        } `}
        onClick={onClick}
        disabled={loading}
        style={{ backgroundColor: liked ? 'red' : 'white' }}>
        {loading ? (
          <SpinnerIcon className='w-6 h-6 hover:border-white' />
        ) : (
          <HeartIcon className='w-6 h-6 hover:border-white' />
        )}
        {liked ? 'Liked' : 'Like'}
      </button>
      {error && error.message}
    </div>
  );
};

export default LikeButton;
