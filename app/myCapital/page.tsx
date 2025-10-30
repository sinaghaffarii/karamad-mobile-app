import dynamic from 'next/dynamic';
import React from 'react';

const DefaultPage = dynamic(() => import('@/components/DefaultPage'));

const MyCapital = () => {
  return <DefaultPage />;
};

export default MyCapital;
