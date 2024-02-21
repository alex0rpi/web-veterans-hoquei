// This hook is used to get the current offset heights for the components: Association, ChapterGrid, Location and ContactForm. It is used in the MainPage component to animate the scroll to the different sections of the page.
import { useEffect } from 'react';

const useScrollHeights = () => {
  useEffect(() => {
    const association = document.getElementById('association');
    const chapterGrid = document.getElementById('chapterGrid');
    const location = document.getElementById('location');
    const contactForm = document.getElementById('contactForm');
    const heights = {
      association: association?.offsetTop,
      chapterGrid: chapterGrid?.offsetTop,
      location: location?.offsetTop,
      contactForm: contactForm?.offsetTop,
    };
    console.log(heights);
  }, []);
  return {
    useScrollHeights,
  };
};

export default useScrollHeights;
