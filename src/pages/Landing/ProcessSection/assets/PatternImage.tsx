import { useEffect } from 'react';
import { SvgImageProps } from '../../../../types/ImageTypes';
import cx from 'classnames';
import gsap from 'gsap';

export const PatternImage = ({ isInView, className }: SvgImageProps) => {
  useEffect(() => {
    if (isInView) {
      console.log('isInView', isInView);
      gsap.fromTo(
        '#column-1',
        {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 1,
        },
        {
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 1,
        },
      );
      gsap.fromTo(
        '#column-2',
        {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 1,
        },
        {
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 1,
        },
      );
      gsap.fromTo(
        '#column-3',
        {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 1,
        },
        {
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 1,
        },
      );
      gsap
        .fromTo(
          '#column-4',
          {
            scaleY: 0,
            transformOrigin: 'bottom',
            duration: 1,
          },
          {
            scaleY: 1,
            transformOrigin: 'bottom',
            duration: 1,
          },
        )
        .then(() => {
          gsap.fromTo(
            '#pop-up',
            {
              opacity: 0,
              transformOrigin: 'center',
              scale: 0,
              duration: 0,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
            },
          );
        });

      gsap.fromTo(
        '#plotted-line path',
        {
          strokeDashoffset: 0,
        },
        {
          strokeDashoffset: 1000,
          duration: 3,
        },
      );
    } else {
      gsap.fromTo(
        '#column-1',
        {
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 1,
        },
        {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 1,
        },
      );

      gsap.fromTo(
        '#column-2',
        {
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 1,
        },
        {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 1,
        },
      );

      gsap.fromTo(
        '#column-3',
        {
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 1,
        },
        {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 1,
        },
      );

      gsap.fromTo(
        '#column-4',
        {
          scaleY: 1,
          transformOrigin: 'bottom',
          duration: 1,
        },
        {
          scaleY: 0,
          transformOrigin: 'bottom',
          duration: 1,
        },
      );

      gsap.fromTo(
        '#pop-up',
        {
          opacity: 1,
          transformOrigin: 'center',
          scale: 1,
          duration: 0,
        },
        {
          opacity: 0,
          scale: 0,
          duration: 0.5,
        },
      );

      gsap.fromTo(
        '#plotted-line path',
        {
          strokeDashoffset: 1000,
        },
        {
          strokeDashoffset: 0,
          duration: 3,
        },
      );
    }
  }, [isInView]);

  return (
    <svg
      viewBox='0 0 258 216'
      className={cx('mx-auto', className)}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_201_8030)'>
        <rect x='50' y='42' width='170' height='128' rx='6' fill='white' />
      </g>

      <g id='column-1' className='ease-in-out'>
        <rect x='79' y='105' width='16' height={36} fill='#9374FF' />
      </g>
      <g id='column-2' className='ease-in-out'>
        <rect x='143' y='101' width='16' height='40' fill='#9374FF' />
      </g>
      <g id='column-3' className='ease-in-out'>
        <rect x='111' y='88' width='16' height='53' fill='#FFDC60' />
      </g>

      <g id='column-4' className='ease-in-out'>
        <rect x='175' y='81' width='16' height='60' fill='#FFDC60' />
      </g>

      <rect x='111' y='151' width='16' height='6' rx='3' fill='#B4B6C4' />
      <rect x='143' y='151' width='16' height='6' rx='3' fill='#B4B6C4' />
      <rect x='175' y='151' width='16' height='6' rx='3' fill='#B4B6C4' />
      <rect x='79' y='151' width='16' height='6' rx='3' fill='#B4B6C4' />

      <g id='pop-up' className='translate-x-0 opacity-0 ease-in-out'>
        <rect x='148' y='48' width='70' height='34' rx='4' fill='#9374FF' />
        <rect
          opacity='0.4'
          x='156'
          y='72'
          width='28'
          height='3'
          rx='1.5'
          fill='white'
        />
        <path
          d='M161.152 56.256C160.891 57.1893 160.433 58.2907 159.78 59.56C159.127 60.82 158.534 61.7627 158.002 62.388H161.222V59.602C161.539 58.9767 161.791 58.3373 161.978 57.684H162.594V62.388H163.812V63.634H162.594V66H161.222V63.634H156.7V62.374C157.969 60.47 158.963 58.4307 159.682 56.256H161.152ZM168.995 56.256C169.583 56.256 170.12 56.396 170.605 56.676C171.1 56.956 171.492 57.3433 171.781 57.838C172.071 58.3327 172.215 58.888 172.215 59.504V62.906C172.215 63.5127 172.075 64.0633 171.795 64.558C171.515 65.0433 171.128 65.4307 170.633 65.72C170.148 66 169.602 66.14 168.995 66.14H168.813C168.197 66.14 167.642 66 167.147 65.72C166.662 65.4307 166.284 65.0387 166.013 64.544C165.743 64.0493 165.607 63.5033 165.607 62.906V59.504C165.607 58.8787 165.747 58.3187 166.027 57.824C166.317 57.3293 166.704 56.9467 167.189 56.676C167.675 56.396 168.216 56.256 168.813 56.256H168.995ZM168.911 57.502C168.37 57.502 167.913 57.684 167.539 58.048C167.166 58.4027 166.979 58.8507 166.979 59.392V63.004C166.979 63.5453 167.166 63.998 167.539 64.362C167.913 64.7167 168.37 64.894 168.911 64.894C169.471 64.894 169.933 64.712 170.297 64.348C170.661 63.984 170.843 63.536 170.843 63.004V59.392C170.843 58.86 170.661 58.412 170.297 58.048C169.933 57.684 169.471 57.502 168.911 57.502ZM181.529 56.396L175.705 66H174.725L180.577 56.396H181.529ZM175.439 56.41C175.933 56.41 176.339 56.5733 176.657 56.9C176.974 57.2173 177.133 57.6187 177.133 58.104V59.602C177.133 60.0873 176.969 60.4933 176.643 60.82C176.325 61.1373 175.924 61.296 175.439 61.296H175.341C174.855 61.296 174.449 61.1373 174.123 60.82C173.805 60.4933 173.647 60.0873 173.647 59.602V58.104C173.647 57.6187 173.805 57.2173 174.123 56.9C174.44 56.5733 174.846 56.41 175.341 56.41H175.439ZM175.397 57.18C175.135 57.18 174.925 57.2593 174.767 57.418C174.617 57.5673 174.543 57.7633 174.543 58.006V59.7C174.543 59.9427 174.617 60.1433 174.767 60.302C174.925 60.4513 175.135 60.526 175.397 60.526C175.658 60.526 175.863 60.4513 176.013 60.302C176.162 60.1433 176.237 59.9427 176.237 59.7V58.006C176.237 57.7633 176.162 57.5673 176.013 57.418C175.863 57.2593 175.658 57.18 175.397 57.18ZM180.899 61.128C181.384 61.128 181.785 61.2913 182.103 61.618C182.429 61.9353 182.593 62.3367 182.593 62.822V64.32C182.593 64.8053 182.434 65.2113 182.117 65.538C181.799 65.8553 181.393 66.014 180.899 66.014H180.801C180.306 66.014 179.9 65.8553 179.583 65.538C179.265 65.2113 179.107 64.8053 179.107 64.32V62.822C179.107 62.3367 179.265 61.9353 179.583 61.618C179.909 61.2913 180.315 61.128 180.801 61.128H180.899ZM180.857 61.898C180.595 61.898 180.385 61.9773 180.227 62.136C180.077 62.2853 180.003 62.4813 180.003 62.724V64.418C180.003 64.6607 180.077 64.8613 180.227 65.02C180.385 65.1693 180.595 65.244 180.857 65.244C181.118 65.244 181.323 65.1693 181.473 65.02C181.622 64.8613 181.697 64.6607 181.697 64.418V62.724C181.697 62.4813 181.622 62.2853 181.473 62.136C181.323 61.9773 181.118 61.898 180.857 61.898Z'
          fill='white'
        />
        <circle cx='203' cy='64' r='7' fill='white' />
        <path
          d='M203.513 62.2429C203.249 61.9607 202.751 61.9607 202.487 62.2429L199.867 65.0406C199.518 65.4133 199.825 65.9688 200.38 65.9688L205.62 65.9687C206.175 65.9687 206.482 65.4133 206.133 65.0406L203.513 62.2429Z'
          fill='#38E7B2'
        />
        <path
          d='M183.64 85.4665C183.269 85.7756 182.731 85.7756 182.36 85.4665L175.244 79.5364C173.807 78.3389 174.654 76 176.524 76L189.476 76C191.346 76 192.193 78.3389 190.756 79.5364L183.64 85.4665Z'
          fill='#9374FF'
        />
      </g>

      <g filter='url(#filter3_d_201_8030)'>
        <rect x='34' y='14' width='58' height='58' rx='6' fill='white' />
        <g id='plotted-line'>
          <path
            d='M28 55.5977C28 55.5977 35.2663 44.5281 42.8966 43.0687C50.5268 41.6094 50.0345 52.2245 54.3172 49.8151C58.6 47.4057 60.5852 34.5944 65.7379 31.9855C71.4483 29.0942 73.7599 43.4728 80.1379 38.7318C87.9172 32.9493 100 33.9131 100 33.9131'
            stroke='#FFD43D'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>

        <rect x='41' y='21' width='12' height='12' rx='2' fill='#9374FF' />
        <rect
          opacity='0.4'
          x='68'
          y='58'
          width='16'
          height='6'
          rx='3'
          fill='#B4B6C4'
        />
      </g>

      <defs>
        <filter
          id='filter0_d_201_8030'
          x='12'
          y='12'
          width='246'
          height='204'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='2'
            operator='erode'
            in='SourceAlpha'
            result='effect1_dropShadow_201_8030'
          />
          <feOffset dy='8' />
          <feGaussianBlur stdDeviation='20' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0235294 0 0 0 0 0.0470588 0 0 0 0 0.231373 0 0 0 0.08 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_201_8030'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_201_8030'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_d_201_8030'
          x='6.99988'
          y='0'
          width='114.5'
          height='98'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='6' />
          <feGaussianBlur stdDeviation='10' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.11 0 0 0 0 0.14137 0 0 0 0 0.4125 0 0 0 0.05 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_201_8030'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_201_8030'
            result='shape'
          />
        </filter>
        <filter
          id='filter2_d_201_8030'
          x='12'
          y='12'
          width='246'
          height='204'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feMorphology
            radius='2'
            operator='erode'
            in='SourceAlpha'
            result='effect1_dropShadow_201_8030'
          />
          <feOffset dy='8' />
          <feGaussianBlur stdDeviation='20' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.0235294 0 0 0 0 0.0470588 0 0 0 0 0.231373 0 0 0 0.08 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_201_8030'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_201_8030'
            result='shape'
          />
        </filter>
        <filter
          id='filter3_d_201_8030'
          x='6.99989'
          y='0'
          width='114'
          height='98'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='6' />
          <feGaussianBlur stdDeviation='10' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.11 0 0 0 0 0.14137 0 0 0 0 0.4125 0 0 0 0.05 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_201_8030'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_201_8030'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};
