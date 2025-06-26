import { Education } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import EducationDetails from '@/components/data-display/education-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const EducationSection = () => {
  return (
    <Container id="Education" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Education" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Nice things people have said about me:
        </Typography>
      </div>

      <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
        {Education?.map((education, index) => (
          <EducationDetails key={index} {...education} />
        ))}
      </div>
    </Container>
  );
};

export default EducationSection;
