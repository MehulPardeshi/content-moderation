import { Github, GitFork } from 'lucide-react';



interface Contributor {
  name: string;
  avatar: string;
  github: string;
  contributions: number;
  role: string;
}

const contributors: Contributor[] = [
  {
    name: "Mehul Pardeshi",
    avatar: "/assets/mehul.jpeg", 
    github: "MehulPardeshi",
    contributions: 12,
    role: "AI Model Developer",
  },
  {
    name: "Siddhesh Rajale",
    avatar: "/assets/sid.jpeg", 
    github: "Siddheshuncodes",
    contributions: 8,
    role: "Systems Design",
  },
  {
    name: "Divyesh Mali",
    avatar: "/assets/dd.jpeg", 
    github: "divyesh-mali",
    contributions: 6,
    role: "Frontend Developer",
  },
];


export function Contributors() {
  return (
    <main className="container mx-auto px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Our Contributors
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Meet the amazing people who make Maverick AI possible through their valuable contributions.
        </p>
      </div>

      <div className="grid gap-8 mt-20">
        {contributors.map((contributor, index) => (
          <div 
            key={index}
            className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <img 
                src={contributor.avatar} 
                alt={contributor.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{contributor.name}</h3>
                <p className="text-gray-400">{contributor.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <GitFork className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">{contributor.contributions}</span>
              </div>
              <a 
                href={`https://github.com/${contributor.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-white/5 p-8 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4">Want to Contribute?</h2>
        <p className="text-gray-400 mb-6">
          We welcome contributions of all kinds! Whether you're fixing bugs, improving documentation, or proposing new features.
        </p>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com/Swifty9/Maverick-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-white/10 px-6 py-3 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
}