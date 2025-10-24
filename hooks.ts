import { useState, useEffect, useRef } from 'react';

export const useActiveSection = (sectionIds: string[], rootMargin = "-50% 0px -50% 0px"): string | null => {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin }
        );
        
        const { current: currentObserver } = observer;
        
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
                currentObserver.observe(el);
            }
        });

        return () => {
            if (currentObserver) {
                currentObserver.disconnect();
            }
        };
    }, [sectionIds, rootMargin]);

    return activeSection;
};
