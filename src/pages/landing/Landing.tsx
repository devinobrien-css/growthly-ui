import { Footer } from '../../components/Footer';
import { BenefitsSection } from './BenefitsSection/BenefitsSection';
import { HeroSection } from './HeroSection';
import { ProcessSection } from './ProcessSection/ProcessSection';

export const Landing = () => {
  return (
    <>
      <div className='mx-auto flex max-w-screen-lg flex-col gap-y-24'>
        <HeroSection />
        <ProcessSection />
        <BenefitsSection />
        <br />
      </div>
      <Footer />
    </>
  );
};
