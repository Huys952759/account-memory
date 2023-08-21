import React from 'react';
import './App.css';
import {Input, Button} from 'antd';

function App() {
  const handleConfirm = () => {

  }
  return (
    <div className="h-[100vh] bg-emerald-300">
      <Input placeholder='输入一个开销吧' className='w-[200px] mt-[20px] ml-[20px]' size='large'/>
      <Button onClick={handleConfirm} type='primary' className='bg-blue-500 ml-[10px]' size='large' >确认</Button>
    </div>
  );
}

export default App;
