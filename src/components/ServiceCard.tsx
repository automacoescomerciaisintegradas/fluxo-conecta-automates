
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const ServiceCard = ({ title, description, icon, delay = 0 }: ServiceCardProps) => {
  const animationDelay = `${delay}ms`;

  return (
    <Card 
      className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-automation-green h-full"
      style={{ animationDelay }}
    >
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-automation-light-green flex items-center justify-center text-automation-green mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
