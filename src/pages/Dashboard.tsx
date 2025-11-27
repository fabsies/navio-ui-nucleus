import { ShieldCheck, ShieldAlert, UserCheck, ChevronRight } from 'lucide-react';

const quizzes = [
  {
    title: 'Digital Safety Skills',
    description: 'Test your knowledge on how to stay safe online.',
    icon: <ShieldCheck className="w-12 h-12 text-blue-500" />,
    color: 'bg-blue-100 dark:bg-blue-900/30',
    progress: 75,
  },
  {
    title: 'Scam Detection Ability',
    description: 'Learn to spot phishing emails and online scams.',
    icon: <ShieldAlert className="w-12 h-12 text-yellow-500" />,
    color: 'bg-yellow-100 dark:bg-yellow-900/30',
    progress: 50,
  },
  {
    title: 'Social Media Privacy',
    description: 'Master your privacy settings on social platforms.',
    icon: <UserCheck className="w-12 h-12 text-green-500" />,
    color: 'bg-green-100 dark:bg-green-900/30',
    progress: 25,
  },
];

const QuizCard = ({ quiz }) => (
  <div className={`p-6 rounded-2xl shadow-sm transition-transform transform hover:-translate-y-1 ${quiz.color}`}>
    <div className="flex items-start justify-between">
      <div className="flex-shrink-0">{quiz.icon}</div>
      <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{quiz.title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{quiz.description}</p>
    </div>
    <div className="mt-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Progress</span>
        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{quiz.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className={`h-2.5 rounded-full ${
            quiz.title === 'Digital Safety Skills' ? 'bg-blue-500' : 
            quiz.title === 'Scam Detection Ability' ? 'bg-yellow-500' : 'bg-green-500'
          }`} 
          style={{ width: `${quiz.progress}%` }}
        ></div>
      </div>
    </div>
  </div>
);


export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back to Navio!
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Enhance your digital safety with our fun, gamified quizzes.
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Safe Quizzes & Skill Assessments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {quizzes.map((quiz) => (
              <QuizCard key={quiz.title} quiz={quiz} />
            ))}
          </div>
        </div>

        <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Your Stats</h2>
            <div className="mt-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm">
                <p className="text-gray-600 dark:text-gray-400">More stats coming soon...</p>
            </div>
        </div>
      </div>
    </div>
  );
}
