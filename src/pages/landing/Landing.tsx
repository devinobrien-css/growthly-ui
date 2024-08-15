import { HeroSection } from './HeroSection';
import { ProcessSection } from './ProcessSection/ProcessSection';

export const Landing = () => {
  return (
    <div className='mx-auto flex max-w-screen-lg flex-col gap-y-24 overflow-x-clip p-6'>
      <HeroSection />
      <ProcessSection />
    </div>
  );
};
