import type { Program } from '../Types/index'

export const programs: Program[] = [
  {
    id: 'education',
    title: 'Education & Scholarships',
    description: 'Providing scholarships to indigent students from primary through university level, both in Nigeria and overseas.',
    icon: 'GraduationCap',
    impact: 'Over 1,000 students supported'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Access',
    description: 'Building hospitals, supplying medicines, vaccines, and mosquito nets to communities in need.',
    icon: 'Heart',
    impact: 'Multiple communities served'
  },
  {
    id: 'housing',
    title: 'Housing & Shelter',
    description: 'Providing houses and temporary shelter for homeless families and individuals.',
    icon: 'Home',
    impact: 'Homes for the homeless'
  },
  {
    id: 'empowerment',
    title: 'Financial Empowerment',
    description: 'Providing financial aid to widows for small businesses to support their families.',
    icon: 'Users',
    impact: 'Empowering widows & families'
  }
]
