import { Footer } from '../../components/Footer';
import { BenefitsSection } from './BenefitsSection/BenefitsSection';
import { FeaturesSection } from './FeaturesSection/FeatruesSection';
import { GlobalSection } from './GlobalSection/GlobalSection';
import { HeroSection } from './HeroSection';
import { ProcessSection } from './ProcessSection/ProcessSection';

export const Landing = () => {
  return (
    <>
      <div className='mx-auto flex max-w-screen-lg flex-col gap-y-24'>
        <HeroSection />
        <ProcessSection />
        <BenefitsSection />
        <FeaturesSection />
        <GlobalSection />
      </div>
      <Footer />
    </>
  );
};
