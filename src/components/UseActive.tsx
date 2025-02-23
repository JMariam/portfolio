"use client";

import { useState, useEffect } from "react";

export const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>("about"); // Default to "about"

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by visibility (ratio) and set the most visible section
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id); // Set the most visible section
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] } // Adjust thresholds for smoother updates
    );

    // Observe each section
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
};
