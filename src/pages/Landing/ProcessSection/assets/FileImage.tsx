import { useEffect } from 'react';
import { SvgImageProps } from '../../../../types/ImageTypes';
import cx from 'classnames';
import gsap from 'gsap';

export const FileImage = ({ isInView, className }: SvgImageProps) => {
  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        '#blue-rect',
        {
          x: -50,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
      );

      gsap.fromTo(
        '#top-rect',
        {
          x: 50,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
      );

      gsap.fromTo(
        '#bottom-rect',
        {
          x: -50,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
      );

      gsap.fromTo(
        '#save-icon',
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
      );

      gsap.fromTo(
        '#user-icon',
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
      );
    } else {
      gsap.fromTo(
        '#blue-rect',
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
        {
          x: -50,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
      );

      gsap.fromTo(
        '#top-rect',
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
        {
          x: 50,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
      );

      gsap.fromTo(
        '#bottom-rect',
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
        {
          x: -50,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
      );

      gsap.fromTo(
        '#save-icon',
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
      );

      gsap.fromTo(
        '#user-icon',
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0,
        },
        {
          scale: 0.5,
          opacity: 0,
          duration: 1,
          delay: 0,
        },
      );
    }
  }, [isInView]);

  return (
    <svg
      className={cx('mx-auto', className)}
      viewBox='0 0 227 188'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_2234_20535)'>
        <rect
          x='38.75'
          y='37.6433'
          width='149.654'
          height='104.357'
          rx='8'
          fill='white'
        />
      </g>

      <g id='save-icon'>
        <rect
          x='160.234'
          y='92.2676'
          width='44.016'
          height='40.7643'
          rx='6'
          fill='#9374FF'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M182.142 104.497H186.578C188.796 104.497 190.605 106.127 190.605 108.117V117.183C190.605 119.18 188.796 120.803 186.56 120.803H182.133C179.915 120.803 178.096 119.18 178.096 117.191V113.277H183.733L182.278 114.582C182.005 114.827 182.005 115.226 182.278 115.471C182.414 115.593 182.596 115.65 182.778 115.65C182.951 115.65 183.133 115.593 183.269 115.471L185.923 113.098C186.06 112.984 186.133 112.821 186.133 112.65C186.133 112.487 186.06 112.324 185.923 112.209L183.269 109.837C182.996 109.592 182.551 109.592 182.278 109.837C182.005 110.082 182.005 110.481 182.278 110.726L183.733 112.022H178.096V108.125C178.096 106.127 179.915 104.497 182.142 104.497ZM173.879 112.65C173.879 112.307 174.192 112.022 174.567 112.022H178.096V113.277H174.567C174.192 113.277 173.879 113 173.879 112.65Z'
          fill='white'
        />
      </g>

      <g id='user-icon' filter='url(#filter1_d_2234_20535)'>
        <rect
          x='56.3563'
          y='53.949'
          width='35.2128'
          height='32.6115'
          rx='6'
          fill='#FFDC60'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M77.8465 67.0555C77.8465 69.0509 76.1189 70.6509 73.9628 70.6509C71.8074 70.6509 70.0791 69.0509 70.0791 67.0555C70.0791 65.06 71.8074 63.4607 73.9628 63.4607C76.1189 63.4607 77.8465 65.06 77.8465 67.0555ZM73.9628 77.0488C70.7807 77.0488 68.094 76.5698 68.094 74.7218C68.094 72.8731 70.7976 72.4111 73.9628 72.4111C77.1456 72.4111 79.8316 72.8901 79.8316 74.7381C79.8316 76.5868 77.128 77.0488 73.9628 77.0488Z'
          fill='white'
        />
      </g>

      <g
        id='blue-rect'
        filter='url(#filter2_d_2234_20535)'
        className='opacity-0'
      >
        <rect
          x='113.577'
          y='14'
          width='84.5106'
          height='24.4586'
          rx='6'
          fill='#9374FF'
        />
        <rect
          x='122.38'
          y='23.7834'
          width='66.9043'
          height='4.89172'
          rx='2.44586'
          fill='white'
        />
      </g>
      <g id='top-rect' filter='url(#filter3_d_2234_20535)'>
        <rect
          x='113.577'
          y='54.7644'
          width='84.5106'
          height='24.4586'
          rx='6'
          fill='white'
        />
        <rect
          x='121.5'
          y='64.5479'
          width='68.6649'
          height='4.89172'
          rx='2.44586'
          fill='#B4B6C4'
        />
      </g>
      <g id='bottom-rect' filter='url(#filter4_d_2234_20535)'>
        <rect
          x='56.3563'
          y='101.236'
          width='84.5106'
          height='24.4586'
          rx='6'
          fill='white'
        />
        <rect
          x='64.2793'
          y='111.019'
          width='68.6649'
          height='4.89172'
          rx='2.44586'
          fill='#B4B6C4'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_2234_20535'
          x='0.75'
          y='7.64331'
          width='225.654'
          height='180.357'
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
            result='effect1_dropShadow_2234_20535'
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
            result='effect1_dropShadow_2234_20535'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_2234_20535'
            result='shape'
          />
        </filter>
        <filter
          id='filter1_d_2234_20535'
          x='36.3563'
          y='39.949'
          width='75.2128'
          height='72.6116'
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
            result='effect1_dropShadow_2234_20535'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_2234_20535'
            result='shape'
          />
        </filter>
        <filter
          id='filter2_d_2234_20535'
          x='93.5771'
          y='0'
          width='124.511'
          height='64.4585'
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
            result='effect1_dropShadow_2234_20535'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_2234_20535'
            result='shape'
          />
        </filter>
        <filter
          id='filter3_d_2234_20535'
          x='93.5771'
          y='40.7644'
          width='124.511'
          height='64.4585'
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
            result='effect1_dropShadow_2234_20535'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_2234_20535'
            result='shape'
          />
        </filter>
        <filter
          id='filter4_d_2234_20535'
          x='36.3563'
          y='87.2356'
          width='124.511'
          height='64.4585'
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
            result='effect1_dropShadow_2234_20535'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_2234_20535'
            result='shape'
          />
        </filter>
      </defs>
    </svg>
  );
};
