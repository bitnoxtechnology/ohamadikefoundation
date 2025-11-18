export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  impact: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface NavItem {
  name: string;
  id: string;
}
