export interface PricingFeatureType {
  feature: string;
  active: boolean;
}
export interface PricingDataType {
  price: number;
  isMostPopular?: boolean;
  title: string;
  description: string;
  features: PricingFeatureType[];
}

export const PricingData: PricingDataType[] = [
  {
    price: 20,
    title: 'Intro',
    description: 'For most businesses that want to otpimize web queries',
    features: [
      {
        feature: 'All limited links',
        active: true,
      },
      {
        feature: 'Own analytics platform',
        active: true,
      },
      {
        feature: 'Chat support',
        active: true,
      },
      {
        feature: 'Optimize hashtags',
        active: true,
      },
      {
        feature: 'Unlimited users',
        active: true,
      },
    ],
  },
  {
    price: 50,
    title: 'Base',
    description: 'For most businesses that want to otpimize web queries',
    features: [
      {
        feature: 'All limited links',
        active: true,
      },
      {
        feature: 'Own analytics platform',
        active: true,
      },
      {
        feature: 'Chat support',
        active: true,
      },
      {
        feature: 'Optimize hashtags',
        active: true,
      },
      {
        feature: 'Unlimited users',
        active: true,
      },
    ],
  },
  {
    price: 75,
    title: 'Early Signup',
    isMostPopular: true,
    description: 'For most businesses that want to otpimize web queries',
    features: [
      {
        feature: 'All limited links',
        active: true,
      },
      {
        feature: 'Own analytics platform',
        active: true,
      },
      {
        feature: 'Chat support',
        active: true,
      },
      {
        feature: 'Optimize hashtags',
        active: true,
      },
      {
        feature: 'Unlimited users',
        active: true,
      },
    ],
  },
  {
    price: 100,
    title: 'Pro',
    description: 'For most businesses that want to otpimize web queries',
    features: [
      {
        feature: 'All limited links',
        active: true,
      },
      {
        feature: 'Own analytics platform',
        active: true,
      },
      {
        feature: 'Chat support',
        active: true,
      },
      {
        feature: 'Optimize hashtags',
        active: true,
      },
      {
        feature: 'Unlimited users',
        active: true,
      },
    ],
  },
];
