import React, { useState, useMemo } from 'react';

type Post = {
  id: string;
  title: string;
  pubDate: string;
};

interface ArchiveFilterProps {
  posts: Post[];
}

export default function ArchiveFilter({ posts }: ArchiveFilterProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  // Extract unique Years
  const availableYears = useMemo(() => {
    const yearSet = new Set<string>();
    posts.forEach((p) => {
      yearSet.add(p.pubDate.substring(0, 4));
    });
    return Array.from(yearSet).sort((a, b) => b.localeCompare(a));
  }, [posts]);

  // Extract unique Months for the selected Year
  const availableMonths = useMemo(() => {
    if (!selectedYear) return [];
    const monthSet = new Set<string>();
    posts.forEach((p) => {
      if (p.pubDate.startsWith(selectedYear)) {
        monthSet.add(p.pubDate.substring(5, 7));
      }
    });
    return Array.from(monthSet).sort((a, b) => a.localeCompare(b));
  }, [posts, selectedYear]);

  // Handlers for mutual exclusion
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    setSelectedYear('');
    setSelectedMonth('');
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
    setSelectedYear('');
    setSelectedMonth('');
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    setSelectedMonth(''); // Reset month when year changes
    setStartDate('');
    setEndDate('');
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    setStartDate('');
    setEndDate('');
  };

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const pDate = new Date(post.pubDate).getTime();

      if (selectedYear) {
        if (selectedMonth) {
          return post.pubDate.startsWith(`${selectedYear}-${selectedMonth}`);
        }
        return post.pubDate.startsWith(selectedYear);
      }

      if (startDate && endDate) {
        return pDate >= new Date(startDate).getTime() && pDate <= new Date(endDate).getTime();
      } else if (startDate) {
        return pDate >= new Date(startDate).getTime();
      } else if (endDate) {
        return pDate <= new Date(endDate).getTime();
      }

      return true; // No filter
    });
  }, [posts, startDate, endDate, selectedYear, selectedMonth]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Filters */}
      <div className="bg-base-200/40 p-5 md:p-6 rounded-2xl border border-base-300">
        <div className="flex flex-col lg:flex-row lg:items-end gap-6">
          
          {/* Time Picker */}
          <div className="flex-1 w-full">
            <label className="label px-1 pt-0 pb-2">
              <span className="label-text font-medium text-base-content/70">Date Range</span>
            </label>
            <div className="flex items-center gap-3">
              <input 
                type="date" 
                className="input input-bordered w-full focus:border-primary transition-colors" 
                value={startDate}
                onChange={handleStartDateChange}
              />
              <span className="text-base-content/40 text-sm font-medium">to</span>
              <input 
                type="date" 
                className="input input-bordered w-full focus:border-primary transition-colors" 
                value={endDate}
                onChange={handleEndDateChange}
              />
            </div>
          </div>

          {/* Subtle Separator */}
          <div className="hidden lg:block w-px h-12 bg-base-300 self-end mb-1"></div>

          {/* Year/Month Dropdowns */}
          <div className="flex-1 w-full lg:max-w-md">
            <label className="label px-1 pt-0 pb-2">
              <span className="label-text font-medium text-base-content/70">Specific Year / Month</span>
            </label>
            <div className="flex items-center gap-3">
              <select 
                className="select select-bordered w-full focus:border-primary transition-colors"
                value={selectedYear}
                onChange={handleYearChange}
              >
                <option value="">Year</option>
                {availableYears.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
              <select 
                className="select select-bordered w-full focus:border-primary transition-colors"
                value={selectedMonth}
                onChange={handleMonthChange}
                disabled={!selectedYear}
              >
                <option value="">Month</option>
                {availableMonths.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
          </div>
          
        </div>
      </div>

      {/* Results */}
      <div className="mt-4">
        <p className="text-base-content/70 mb-6 font-medium">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
        </p>
        
        <div className="bg-base-100 border border-base-300 rounded-xl overflow-hidden">
          <div className="divide-y divide-base-300">
            {filteredPosts.map((post) => (
              <a key={post.id} href={`/blog/${post.id}`} className="block hover:bg-base-200/50 transition-colors duration-200">
                <div className="p-6 flex flex-col md:flex-row md:items-center gap-4">
                  <time className="text-sm text-base-content/60 md:w-48 flex-shrink-0" dateTime={post.pubDate}>
                    {formatDate(post.pubDate)}
                  </time>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-200 text-base-content">
                      {post.title}
                    </h2>
                  </div>
                  <svg
                    className="w-5 h-5 text-base-content/50 flex-shrink-0 md:ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
            
            {filteredPosts.length === 0 && (
              <div className="p-12 text-center text-base-content/50">
                No posts found for the selected dates.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
