import { Button, Image } from 'antd';
import { useEffect, useState } from 'react';
import { useWindowSize } from '../utilities/use-window-size.utils';

const Dashboard: React.FC = () => {
  const [imageSize, setImageSize] = useState<number>(200);
  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 768) {
      setImageSize(100);
    } else {
      setImageSize(200);
    }
  }, [width]);

  return (
    <div className='flex items-center justify-center h-full'>
      <div className='md:grid md:gap-28 md:grid-cols-3'>
        <div className='flex flex-col items-center justify-center gap-y-4'>
          <Image
            width={imageSize}
            height={imageSize}
            preview={false}
            src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/member.svg'
          />
          <Button className='font-bold w-52' type='primary' size='large'>
            Member
          </Button>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-4'>
          <Image
            width={imageSize}
            height={imageSize}
            preview={false}
            src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/event.svg'
          />
          <Button className='font-bold w-52 ' type='primary' size='large'>
            Event
          </Button>
        </div>
        <div className='flex flex-col items-center justify-center gap-y-4 '>
          <Image
            width={imageSize}
            height={imageSize}
            preview={false}
            src='https://kmc-s3.sgp1.cdn.digitaloceanspaces.com/HDF/static/visitor.svg'
          />
          <Button className='font-bold w-52 ' type='primary' size='large'>
            Guest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
