'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/KavitaKapkoti_resume_2025.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
