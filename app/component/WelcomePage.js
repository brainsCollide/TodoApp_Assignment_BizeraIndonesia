'use client';
import { useRouter } from "next/navigation";

const WelcomePage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/todo');
  }

  return (
    <div className="relative flex flex-col items-center justify-center text-center p-10 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 max-w-xl mx-auto animate-fade-in">
      
      
      <h1 className="text-4xl font-extrabold mb-4 text-white drop-shadow-md">
        Welcome to <span className="text-[#F7A21D]">Todo App</span>
      </h1>

      
      <p className="text-lg text-white/90 mb-8 leading-relaxed">
        Stay organized and manage your tasks efficiently. Track your progress and never miss anything important.
      </p>

    
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:from-indigo-500 hover:to-blue-500 transition-transform duration-300"
      >
        Get Started
      </button>

    </div>
  );
}

export default WelcomePage;
