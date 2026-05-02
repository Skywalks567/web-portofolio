export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Portofolio Website',
    description:
      'My portofolio website. Built with Next.js, TypeScript, Tailwind, and Framer Motion.',
    tags: ['Next.js', 'TypeScript', 'React'],
    image: '/projects/Web-Portofolio.png',
    link: 'https://github.com/Skywalks567/web-portofolio',
  },
  {
    title: 'Pyfend',
    description:
      'A cli tools and library for hash detection and cracking known hash value with smart wordlist generator.',
    tags: ['Python', 'Click', 'Hash Cracking'],
    image: '/projects/Pyfend.png',
    link: 'https://github.com/Skywalks567/pyfend',
  },
  {
    title: 'NutriScale',
    description:
      'A website that can calculate user BMI and suggest what food they should take and directly order them.',
    tags: ['Next.js', 'TypeScript', 'React', 'Python', 'Supabase'],
    image: '/projects/NutriScale.png',
    link: 'https://github.com/Kurtz17/NutriScale',
  },
  {
    title: 'Prim Visualiaation',
    description:
      'A web-based dashboard for graph visualization of prim algorithm. Deploy with Streamlit.',
    tags: ['Python', 'pandas', 'graphviz', 'Streamlit'],
    image: '/projects/Prim-Visualization.png',
    link: 'https://github.com/Skywalks567/PrimVisualization',
  },
  {
    title: 'Color Picker',
    description:
      'A website that can extract dominant colors from an image using k-means clustering. Deploy with Streamlit.',
    tags: ['Python', 'Streamlit', 'K-Means'],
    image: '/projects/ColorPicker.png',
    link: 'https://github.com/Skywalks567/ColorPicker',
  },
  {
    title: 'Weather Prediction',
    description: 'A website that get an API from bmkg to predict weather.',
    tags: [
      'Python',
      'Streamlit',
      'Machine Learning',
      'scikit-learn',
      'pandas',
      'API',
      'Random Forest Classifier',
    ],
    image: '/projects/Weather-Prediction.png',
    link: 'https://github.com/Skywalks567/WeatherPrediction',
  },
];
