import React from 'react';

interface TopCardsProp {
  title: string;
  time: string;
  body: string;
}

const TopCards = ({ title, time, body }: TopCardsProp) => (
  <div className="card">
    <div className="flex mb-8">
      <span className="leading-none whitespace-nowrap text-[20px] text-[#808080] mr-8">
        {title}
      </span>
      <span
        className={`leading-none text-[16px] text-[${time.includes('+') ? '#36884C' : '#DA1C2C'}]`}
      >
        {time}
      </span>
    </div>
    <span>{body}</span>
  </div>
);

export default TopCards;
