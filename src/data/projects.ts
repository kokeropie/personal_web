import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ETL Pipeline Tool',
    description:
      'A desktop application to automate data extraction, transformation, and loading workflows for MSSQL databases — replacing manual Crystal Reports exports.',
    longDescription:
      'Built to solve a recurring pain point at work: extracting and reformatting data from MSSQL for downstream reporting. The tool handles scheduled queries, data transformation rules, and output formatting without manual intervention.',
    techStack: ['Python', 'MSSQL', 'SQL', 'pandas'],
    imageUrl: '/projects/etl-tool.png',
    githubUrl: 'https://github.com/kokeropie/etl-tool',
    status: 'in-progress',
  },
  {
    id: '2',
    title: 'Travel KPI Dashboard',
    description:
      'An executive dashboard in QlikView tracking booking volume, revenue, and cancellation rates across product lines at a Jakarta-based travel company.',
    techStack: ['QlikView', 'SQL', 'MSSQL'],
    imageUrl: '/projects/dashboard.png',
    status: 'live',
  },
  {
    id: '3',
    title: '[Your Next Project]',
    description: 'Add your next project here — update src/data/projects.ts.',
    techStack: ['[Tech Stack]'],
    imageUrl: '/projects/placeholder.png',
    githubUrl: 'https://github.com/kokeropie',
    status: 'archived',
  },
];
