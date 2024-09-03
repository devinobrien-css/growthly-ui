export interface PricingFeatureType {
  feature: string;
  active: boolean;
}
export interface PricingDataType {
  price: string;
  isMostPopular?: boolean;
  title: string;
  description: string;
  features: PricingFeatureType[];
}

export const PricingData: PricingDataType[] = [
  {
    price: '$20',
    title: 'Intro',
    description: 'For hobbyists and enthusiasts looking to work at home',
    features: [
      {
        feature: '10 patterns / month',
        active: true,
      },
      {
        feature: 'PDF/JPG download',
        active: true,
      },
      {
        feature: 'One month history',
        active: true,
      },
      {
        feature: 'Up to 3 revisions',
        active: true,
      },
      {
        feature: 'Unlimited users',
        active: true,
      },
    ],
  },
  {
    price: '$50',
    title: 'Base',
    description: 'For most designers that want to rapidly prototype',
    features: [
      {
        feature: '20 patterns / month',
        active: true,
      },
      {
        feature: 'DXF/PDF/JPG download',
        active: true,
      },
      {
        feature: 'Three month history',
        active: true,
      },
      {
        feature: 'Up to 10 revisions',
        active: true,
      },
      {
        feature: 'Unlimited users',
        active: true,
      },
    ],
  },
  {
    price: '$15',
    title: 'Early Signup',
    isMostPopular: true,
    description: 'For the best designers who decide sign up early',
    features: [
      {
        feature: '15 patterns / month',
        active: true,
      },
      {
        feature: 'DXF/PDF/JPG download',
        active: true,
      },
      {
        feature: 'Three month history',
        active: true,
      },
      {
        feature: 'Up to 7 revisions',
        active: true,
      },
      {
        feature: 'Unlimited users',
        active: true,
      },
    ],
  },
  {
    price: 'Custom',
    title: 'Enterprise',
    description: 'For businesses that want to otpimize their workflow',
    features: [
      {
        feature: 'Unlimited patterns',
        active: true,
      },
      {
        feature: 'DXF/PDF/JPG download',
        active: true,
      },
      {
        feature: 'Unlimited history',
        active: true,
      },
      {
        feature: 'Unlimited revisions',
        active: true,
      },
      {
        feature: 'Unlimited users',
        active: true,
      },
    ],
  },
];
