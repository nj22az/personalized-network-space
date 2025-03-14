import React from "react";
import { LucideProps } from "lucide-react";
import { Code, Cpu, Cog, Server, Scale, Ruler, Gauge, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Skills = () => {
  const skillCategories = [
    {
      title: "Certified Calibration Expertise",
      icon: Scale,
      skills: [
        "ISO/IEC 17025:2017 Certified",
        "Force (ISO 7500-1)",
        "Strain (ISO 9513)",
        "Speed & Displacement",
        "ASTM E2658 & E2309",
        "ISO 5893"
      ]
    },
    {
      title: "Industrial Automation",
      icon: Cpu,
      skills: [
        "PLC Programming",
        "HMI Development",
        "SCADA Systems",
        "Industrial Networks",
        "Siemens Tia Portal"
      ]
    },
    {
      title: "Engineering",
      icon: Cog,
      skills: ["Mechanical Systems", "Electrical Systems", "System Integration", "Equipment Maintenance"]
    },
    {
      title: "Marine Engineering",
      icon: Anchor,
      skills: [
        "Engine Operations",
        "System Maintenance",
        "Safety Protocols",
        "Equipment Repair",
        "COC Watchkeeping",
        "Advanced Firefighting",
        "Basic Safety",
        "Crowd Management"
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <Link to="/about?tab=nils">
        <Button 
          variant="ghost" 
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Nils
        </Button>
      </Link>

      <div className="bg-background rounded-xl p-4 sm:p-6 shadow-sm border border-border">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Skills & Expertise</h2>
        <div className="grid gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="p-6 rounded-xl border border-border hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium text-foreground">{category.title}</h3>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
