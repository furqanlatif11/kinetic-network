import React from 'react';
import { Wifi, WifiOff, Router, Cable, Signal, Wrench } from 'lucide-react';
import Link from 'next/link';

export default function ProblemsWeFixComponent() {
  const problems = [
    {
      icon: WifiOff,
      title: "Slow Internet Speeds",
      description: "Network optimization and bandwidth issues resolved"
    },
    {
      icon: Router,
      title: "Router Configuration",
      description: "Setup, updates, and performance optimization"
    },
    {
      icon: Cable,
      title: "Connection Drops",
      description: "Intermittent connectivity and stability issues fixed"
    },
    {
      icon: Signal,
      title: "Weak Signal Coverage",
      description: "WiFi range extension and signal strength improvement"
    },
    {
      icon: Wifi,
      title: "Network Setup",
      description: "New installations and equipment configuration"
    },
    {
      icon: Wrench,
      title: "Hardware Issues",
      description: "Equipment repairs and replacement services"
    }
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Problems We Fix
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our certified technicians are equipped to handle all your internet connectivity issues. 
            Fast, reliable service when you need it most.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Available Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">First-Visit Resolution</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">2hrs</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Technical Support?
          </h3>
          <p className="text-gray-600 mb-6">
            Schedule a technician visit today and get your internet back on track
          </p>
          <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-sm">
            Schedule a Visit
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            Or call us at <span className="text-blue-600 font-semibold">1-800-KINETIC</span>
          </p>
        </div>
      </div>
    </div>
  );
}