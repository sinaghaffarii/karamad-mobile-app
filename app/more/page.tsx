import dynamic from 'next/dynamic';
import React from 'react';

const DefaultPage = dynamic(() => import('@/components/DefaultPage'));

const More = () => {
  return <DefaultPage />;
};

export default More;
