import Image from 'next/image';

import KavitaProfile2 from '/public/images/profile2.jpg';
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About me" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={KavitaProfile2}
              alt="Profile of Kavita"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]" />
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Here&rsquo;s a little about who I am:
          </Typography>
          <Typography>
            I&apos;m a passionate full stack developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). 
            I love blending technical logic with visual creativity to bring modern, responsive, and user-friendly digital experiences to life. 
            Writing clean, maintainable, and performance-optimized code is something I deeply care about.
          </Typography>
          <Typography>
            My journey began during my B.Tech in Computer Science and Engineering, where I developed a strong interest in software development. 
            Since then, I&rsquo;ve been consistently learning, building, and contributing to real-world projects, exploring everything from frontend design to backend architecture, and cloud services.
          </Typography>
          <Typography>
            I&rsquo;m always curious and eager to grow as a developer.
            I enjoy working on products from start to finish—right from brainstorming ideas to writing production-ready code.
            My focus is on web-application that are not only functional but also create real impact.
          </Typography>
          <Typography>
            When I&rsquo;m not coding, you&rsquo;ll find me exploring open-source projects, reading about new tech trends, or sharing knowledge with my peers. You can connect with me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.Linkedin}
            >
              Linkedin
            </Link>{' '}
            where I share tech-related bites and build in public, or you can
            follow me on{' '}
            <Link
              noCustomization
              externalLink
              withUnderline
              href={EXTERNAL_LINKS.GITHUB}
            >
              GitHub
            </Link>.
          </Typography>
          <Typography>Here&rsquo;s a quick snapshot about me.</Typography>
          <div className="flex flex-col gap-2 md:flex-row md:gap-6">
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">
                B.Tech in Computer Engineering
              </Typography>
              <Typography component="li">Aspiring MERN Stack Developer</Typography>
            </ul>
            <ul className="flex list-inside list-disc flex-col gap-2">
              <Typography component="li">Passionate learner & problem solver</Typography>
              <Typography component="li">Open-source contributor</Typography>
            </ul>
          </div>
          <Typography>
            I&rsquo;m currently open to freelance and full-time opportunities—feel free to reach out and say hi!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
