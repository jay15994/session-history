import React from 'react';
import { Inter } from 'next/font/google';

import TopCards from '@/components/TopCards';
import BarChart from '@/components/BarChart';

const inter = Inter({ subsets: ['latin'] });

const topCardsList = [
  {
    title: 'Active Sessions',
    time: '+12.21%',
    body: '10 H',
  },
  {
    title: 'Total Sessioons',
    time: '-2.21%',
    body: '100 H',
  },
  {
    title: 'Highest Active Sessions',
    time: '+12.21%',
    body: '10 H',
  },
  {
    title: 'Longest Session',
    time: '-2.21%',
    body: '12 H : 31 M : 2 S',
  },
];

const Home = () => {
  return (
    <main className={`min-h-screen bg-[#090A0F] p-[50px] ${inter.className}`}>
      <h1 className="text-[40px] leading-none mb-8">Session History</h1>
      <div className="flex overflow-x-auto mb-8">
        {topCardsList.map(item => (
          <TopCards key={item.title} title={item.title} time={item.time} body={item.body} />
        ))}
      </div>
      <BarChart />
    </main>
  );
};

export default Home;
