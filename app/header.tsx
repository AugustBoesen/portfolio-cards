import React, { useContext } from 'react';
import { currentPage } from './layout';

export default function Header() {
  const { pageValue } = useContext(currentPage);
  const { setValue } = useContext(currentPage);

  if (pageValue === '') {
    setValue('Default');
  }

  const setMusic = () => {
    setValue('Music');
    if (pageValue === 'Music') {
      setValue('Default');
    }
  };
  const setEvents = () => {
    setValue('Events');
    if (pageValue === 'Events') {
      setValue('Default');
    }
  };
  const setCode = () => {
    setValue('Code');
    if (pageValue === 'Code') {
      setValue('Default');
    }
  };

  return (
    <header>
      <button
        className={pageValue === 'Music' ? 'active' : ''}
        onClick={setMusic}
      >
        Music
      </button>
      <button
        className={pageValue === 'Events' ? 'active' : ''}
        onClick={setEvents}
      >
        Events
      </button>
      <button
        className={pageValue === 'Code' ? 'active' : ''}
        onClick={setCode}
      >
        Code
      </button>
      {pageValue !== 'Default' && (
        <button
          className='border-none text-4xl absolute right-0 top-0.5'
          onClick={() => setValue('Default')}
        >
          ↵
        </button>
      )}
    </header>
  );
}
