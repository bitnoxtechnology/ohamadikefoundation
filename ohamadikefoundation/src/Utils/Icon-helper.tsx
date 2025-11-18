import { Heart, GraduationCap, Home, Users, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const getIconComponent = (iconName: string): LucideIcon | null => {
  const iconMap: Record<string, LucideIcon> = {
    Heart,
    GraduationCap,
    Home,
    Users,
    MapPin,
    Mail,
    Phone,
    Facebook,
    Twitter,
    Instagram,
    Linkedin
  }

  return iconMap[iconName] || null
}