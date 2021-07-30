import { Button } from 'antd';

const Dashboard: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='grid gap-28 md:grid-cols-3'>
        <Button
          className='w-40 font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
          type='primary'
        >
          Member
        </Button>
        <Button
          className='w-40 font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
          type='primary'
        >
          Event
        </Button>
        <Button
          className='w-40 font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
          type='primary'
        >
          Guest
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
