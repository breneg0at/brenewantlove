import Image from 'next/image';
import React from 'react';

interface DownloadContentProps {
  imageUrl: string;
  description?: string;
}

const DownloadContent: React.FC<DownloadContentProps> = ({ imageUrl, description }) => {
  return (
    <div style={{ width: '400px', height: '600px', background: '#e0d9ca', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
      <Image src={imageUrl} alt="Content" style={{ width: '100%' }} width={300} height={300} />
      {description && <p style={{ marginTop: '10px' }}>{description}</p>}
    </div>
  );
};

export default DownloadContent;
