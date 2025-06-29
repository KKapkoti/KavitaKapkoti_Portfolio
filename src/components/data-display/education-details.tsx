import Image from 'next/image';
import { EducationDetails as EducationDetailsProps } from '@/lib/types';
import Typography from '@/components/general/typography';
import Card from '@/components/layout/card';

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
};

const EducationDetails = ({
  course,
  collegeIcon,
  education,
  title,
  startDate,
  endDate,
  currentlyWorkHere,
}: EducationDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
      <Image src={collegeIcon!} alt={`${course} avatar`} width={80} height={80}></Image>
      <Typography>&quot;{education}&quot;</Typography>
      <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {course}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
          {title}
        </Typography>
      </div>
     <div className="w-full text-center md:text-center">
  <Typography className="text-gray-700 whitespace-nowrap text-sm sm:text-base md:text-sm lg:text-base">
          {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(startDate)}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(endDate)
            : 'NA'}
        </Typography>
      </div>
    </Card>
  );
};

export default EducationDetails;
