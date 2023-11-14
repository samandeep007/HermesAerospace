import { useEffect, useRef, useState } from 'react';
import '../App.css';


   export default function ScrollAnimation({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`scroll-animation ${isVisible ? 'is-visible' : ''}`}
      ref={ref}
    >
      {children}
    </div>
  );
}

   