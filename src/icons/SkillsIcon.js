import React from 'react';

export default function SkillsIcon({ active }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.7501 19.2502H21C19.0671 19.2502 17.4999 17.683 17.4999 15.75V14.6257C18.2742 13.7053 18.8296 12.6167 19.1748 11.4665C19.2106 11.2726 19.3972 11.1768 19.5217 11.0435C20.1917 10.3735 20.3235 9.243 19.8209 8.43804C19.7525 8.31587 19.6292 8.20992 19.6362 8.05855C19.6362 7.03228 19.6413 6.0044 19.6349 4.97894C19.6074 3.74082 19.2535 2.45291 18.3855 1.53611C17.6847 0.795377 16.7225 0.354319 15.7297 0.165558C14.4752 -0.0737548 13.1628 -0.0616363 11.9203 0.254427C10.8436 0.526172 9.83198 1.1568 9.20649 2.0916C8.65262 2.9043 8.40997 3.89109 8.36899 4.86364C8.35364 5.9078 8.36547 6.95455 8.3623 8.00125C8.38613 8.21079 8.2084 8.35257 8.12813 8.52604C7.65476 9.38479 7.86314 10.5547 8.62377 11.1793C8.81674 11.3125 8.85287 11.5553 8.92275 11.7646C9.25445 12.7985 9.80463 13.7547 10.5002 14.5879V15.75C10.5002 17.683 8.93302 19.2502 7.00019 19.2502H5.25005C5.25005 19.2502 2.07825 20.125 0 24.5002V26.2503C0 27.2174 0.782736 28 1.75008 28H26.2502C27.2173 28 28 27.2174 28 26.2503V24.5002C25.9219 20.1253 22.7501 19.2502 22.7501 19.2502Z"
        transform="translate(28) scale(-1 1)"
        fill={active ? '#E8960C' : '#D1D1D1'}
      />
    </svg>
    
  );
}
