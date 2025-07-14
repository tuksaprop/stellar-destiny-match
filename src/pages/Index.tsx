
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the HTML version
    window.location.href = '/index.html';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cosmic-blue text-white">
      <div className="text-center">
        <div className="animate-spin w-16 h-16 border-4 border-cosmic-magenta border-t-transparent rounded-full mx-auto mb-4"></div>
        <p className="text-xl">Redirigiendo a AlmaEstelar...</p>
      </div>
    </div>
  );
};

export default Index;
