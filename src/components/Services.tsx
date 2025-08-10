import React from "react";
import {
  Wrench,
  UserCog,
  Settings,
  Truck,
  Lightbulb,
  CheckCircle,
  Leaf,
  Sliders,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Quality Machine Parts",
    description:
      "Premium excavator parts, engine components, hydraulic systems, and more—engineered for performance and durability.",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    title: "Technical Expertise",
    description:
      "Expert guidance from experienced engineers to help you select the right parts tailored to your machinery.",
    icon: <UserCog className="w-6 h-6" />,
  },
  {
    title: "Custom Solutions",
    description:
      "Customized parts and configurations designed for your specific industrial challenges and use cases.",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Prompt Delivery",
    description:
      "Streamlined logistics and robust inventory ensure on-time delivery of critical components.",
    icon: <Truck className="w-6 h-6" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30 dark:bg-muted/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services & Development</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            At Paras Hi Tech Engineers, we deliver reliable solutions for industrial machinery through a blend of product excellence and engineering expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-border bg-card transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange/10 text-orange">
                  {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
            <CardContent>
              <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </CardDescription>
            </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 bg-card p-6 md:p-12 rounded-lg shadow-lg border border-border">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Continuous Development & Innovation</h3>
              <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                We consistently invest in R&D to enhance product reliability, performance, and sustainability in the industrial space.
              </p>
              <ul className="space-y-3 text-gray-700 text-sm pl-4 list-disc">
                <li className="flex items-start gap-2">
                  <Sliders className="w-4 h-4 mt-1 text-orange" />
                  Implementation of advanced manufacturing techniques
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-orange" />
                  Rigorous quality control processes
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 mt-1 text-orange" />
                  Research into sustainable and eco-friendly materials
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="w-4 h-4 mt-1 text-orange" />
                  Customization options for specialized machinery
                </li>
              </ul>
            </div>

            <div className="md:w-1/2 w-full">
              <img
                src="/images/industrial-innovation.webp"
                alt="Industrial Innovation"
                className="rounded-xl shadow-lg ring-1 ring-border w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
