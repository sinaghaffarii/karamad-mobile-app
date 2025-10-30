import dynamic from 'next/dynamic';
import React from 'react';

const DefaultPage = dynamic(() => import('@/components/DefaultPage'));

const Funds = () => {
  return <DefaultPage />;
};

export default Funds;
