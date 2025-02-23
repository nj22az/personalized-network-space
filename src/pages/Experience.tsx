
import React, { useState, useCallback, useRef, useEffect } from "react";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

interface Experience {
  period: string;
  title: string;
  company: string;
  category: string;
  location: string;
  description: string;
  skills: string[];
}

const getIcon = (category: string): React.FC<Icons.LucideProps> => {
  switch (category.toLowerCase()) {
    case 'maritime':
      return Icons.Anchor;
    case 'military':
      return Icons.Shield;
    case 'education':
      return Icons.GraduationCap;
    case 'industrial':
      return Icons.Factory;
    case 'automation':
      return Icons.Cpu;
    default:
      return Icons.Briefcase;
  }
};

const experiences: Experience[] = [
  {
    period: "January 2024 - Present",
    title: "Field Service Engineer",
    company: "Instron",
    category: "Industrial",
    location: "Nordic Region • Ireland • Poland",
    description: "Installation and commissioning of testing systems across Nordic Region and Europe. Perform comprehensive IQOQ processes and develop testing methods using Bluehill software.",
    skills: ["Testing Systems Installation", "IQOQ & Calibration", "Bluehill Software", "Technical Training", "Data Analysis"],
  },
  {
    period: "Jul 2023 - Dec 2023",
    title: "Automation Engineer",
    company: "AH Automation",
    category: "Automation",
    location: "Sweden",
    description: "Developed expertise in Siemens TIA Portal and automation systems. Implemented conveyor belt systems with touchscreen Human-Machine Interface (HMI) interfaces.",
    skills: ["PLC Programming", "HMI Development", "System Integration", "Technical Documentation", "Automation Design"],
  },
  {
    period: "Aug 2018 - Jun 2023",
    title: "Marine Engineer Officer",
    company: "Swedish Armed Forces",
    category: "Maritime",
    location: "Sweden",
    description: "Served as Marine Engineer Officer on combat vessels. Led engineering teams and managed complex marine systems.",
    skills: ["Marine Engineering", "Team Leadership", "System Maintenance", "Emergency Response", "Technical Operations"],
  },
  {
    period: "Jun 2015 - Jul 2018",
    title: "Technical Officer",
    company: "Swedish Armed Forces",
    category: "Military",
    location: "Sweden",
    description: "Specialized in technical operations and maintenance of military equipment. Trained personnel in technical procedures.",
    skills: ["Technical Operations", "Personnel Training", "Equipment Maintenance", "Safety Protocols", "Team Management"],
  }
];

const Experience = () => {
  const [visibleExperiences, setVisibleExperiences] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  const showMore = () => {
    setVisibleExperiences(prev => Math.min(prev + 2, experiences.length));
  };

  const showLess = () => {
    setVisibleExperiences(2);
    setSelectedCategory(null);
  };

  // Initialize Three.js scene
  const initThreeJS = useCallback(() => {
    if (!containerRef.current) return;

    // Clean up previous scene if it exists
    if (animationRef.current) {
      containerRef.current.removeChild(animationRef.current.domElement);
      animationRef.current = null;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);
    
    camera.position.z = 5;

    // Create wave geometry
    const geometry = new THREE.PlaneGeometry(20, 20, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x9b87f5,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const waves = new THREE.Mesh(geometry, material);
    waves.rotation.x = -Math.PI / 3;
    scene.add(waves);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      
      const positions = geometry.attributes.position;
      const time = Date.now() * 0.001;
      
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = 0.5 * Math.sin(x + time) * Math.cos(y + time);
        positions.setZ(i, z);
      }
      
      positions.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();
    animationRef.current = renderer;

    return () => {
      if (containerRef.current && animationRef.current) {
        containerRef.current.removeChild(animationRef.current.domElement);
      }
    };
  }, []);

  // Handle category selection
  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
      if (category.toLowerCase() === 'maritime') {
        initThreeJS();
      }
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (containerRef.current && animationRef.current) {
        containerRef.current.removeChild(animationRef.current.domElement);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 overflow-hidden">
      <h2 className="text-xl sm:text-2xl font-semibold text-brand-dark mb-6 sm:mb-8">Professional Experience</h2>
      
      <div className="relative space-y-6 sm:space-y-8">
        {experiences.slice(0, visibleExperiences).map((exp, index) => (
          <div key={index} className="relative flex gap-3 sm:gap-6 animate-fade-in">
            {/* Timeline line that stops before and after the icon */}
            {index !== 0 && (
              <div className="absolute left-[19px] sm:left-[27px] top-0 h-3 w-px bg-gray-200" />
            )}
            {index !== visibleExperiences - 1 && (
              <div className="absolute left-[19px] sm:left-[27px] top-[52px] bottom-0 w-px bg-gray-200" />
            )}
            
            <div className="relative shrink-0">
              <button 
                onClick={() => handleCategoryClick(exp.category)}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-brand-purple/10 flex items-center justify-center z-10 relative hover:bg-brand-purple/20 transition-colors"
              >
                {React.createElement(getIcon(exp.category), {
                  className: "h-5 w-5 sm:h-6 sm:w-6 text-brand-purple"
                })}
              </button>
            </div>
            
            <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-0 mb-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-brand-dark">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-gray mt-1">
                    <Icons.Building className="h-4 w-4 shrink-0" />
                    <span>{exp.company}</span>
                    <span className="hidden sm:inline text-gray-300">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-neutral-gray">
                  <Icons.Calendar className="h-4 w-4 mr-2 shrink-0" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-neutral-gray mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 sm:px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-xs sm:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        {visibleExperiences < experiences.length ? (
          <Button 
            variant="outline" 
            onClick={showMore}
            className="mx-auto"
          >
            Show More
          </Button>
        ) : (
          <Button 
            variant="outline" 
            onClick={showLess}
            className="mx-auto"
          >
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
};

export default Experience;
