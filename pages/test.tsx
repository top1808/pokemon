import React from 'react';

export interface Props {
  name: string;
  age: number;
}

const test = (props: Props) => {
  return (
    <div>
      test
      <div className='123'>123 das</div>
    </div>
  );
};

export default test;
