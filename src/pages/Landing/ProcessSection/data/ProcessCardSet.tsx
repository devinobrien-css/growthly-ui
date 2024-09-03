import { DescriptionImage } from '../assets/DescriptionImage';
import { FileImage } from '../assets/FileImage';
import { PatternImage } from '../assets/PatternImage';
import { ProcessCardProps } from '../ProcessCard';

export const processCardsSet: ProcessCardProps[] = [
  {
    title: 'Get creative with your description',
    description:
      'Generate intricate clothing patterns based on your description in seconds',
    Image: DescriptionImage,
  },
  {
    title: 'Choose your file format',
    description:
      'Export your file as a .DXF or .PDF, ready to be printed at home or sent to factory',
    Image: FileImage,
  },
  {
    title: 'Create your pattern instantly',
    description:
      'Save time and streamline your design process with AI-powered precision trained on luxury patterns',
    Image: PatternImage,
  },
];
