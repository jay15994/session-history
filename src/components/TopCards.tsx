import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface TopCardsProp {
  title: string;
  time: string;
  body: string;
}

const TopCards = ({ title, time, body }: TopCardsProp) => (
  <div className="mr-2.5 inline-block bg-[#0F131A] rounded-2xl border-2 border-gray-800 p-7">
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
