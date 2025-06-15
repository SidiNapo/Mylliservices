
import React from 'react';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Award, 
  Stethoscope,
  Home,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Calendar,
  User,
  Settings,
  MessageCircle,
  Activity,
  Zap,
  Target,
  Briefcase,
  Globe,
  Smartphone,
  Headphones,
  Eye,
  ThumbsUp,
  TrendingUp,
  BookOpen,
  FileText,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Link,
  Copy,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Menu,
  ChevronRight,
  ChevronLeft,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

interface FastIconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

const iconMap = {
  // Service icons
  heart: Heart,
  shield: Shield,
  clock: Clock,
  users: Users,
  award: Award,
  stethoscope: Stethoscope,
  
  // Navigation icons
  home: Home,
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  
  // UI icons
  star: Star,
  checkCircle: CheckCircle,
  arrowRight: ArrowRight,
  play: Play,
  pause: Pause,
  calendar: Calendar,
  user: User,
  settings: Settings,
  messageCircle: MessageCircle,
  
  // Business icons
  activity: Activity,
  zap: Zap,
  target: Target,
  briefcase: Briefcase,
  globe: Globe,
  smartphone: Smartphone,
  headphones: Headphones,
  eye: Eye,
  thumbsUp: ThumbsUp,
  trendingUp: TrendingUp,
  
  // Content icons
  bookOpen: BookOpen,
  fileText: FileText,
  search: Search,
  filter: Filter,
  download: Download,
  upload: Upload,
  share2: Share2,
  link: Link,
  copy: Copy,
  edit: Edit,
  trash2: Trash2,
  
  // Action icons
  plus: Plus,
  minus: Minus,
  x: X,
  menu: Menu,
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
};

const FastIcon: React.FC<FastIconProps> = ({ 
  name, 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div className={`w-6 h-6 ${className}`} />;
  }
  
  return (
    <IconComponent 
      size={size} 
      className={className} 
      color={color}
      style={{ minWidth: size, minHeight: size }}
    />
  );
};

export default FastIcon;
