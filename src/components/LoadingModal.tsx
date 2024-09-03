import { Icon } from '@iconify/react/dist/iconify.js';

export const LoadingModal = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='rounded-lg bg-white p-8'>
        <div className='flex items-center justify-center'>
          <Icon icon='line-md:loading-twotone-loop' width={50} height={50} />
        </div>
      </div>
    </div>
  );
};
