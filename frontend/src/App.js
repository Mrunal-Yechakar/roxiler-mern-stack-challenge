import React, { useState, useEffect, Suspense, lazy } from 'react';
import Dropdown from './components/Dropdown';
import TransactionsTable from './components/TransactionsTable';
import SearchBar from './components/SearchBar';
import Statistics from './components/Statistics';
import './css/home.css';

const Barchart = lazy(() => import('./components/BarChart'));
const PieChart = lazy(() => import('./components/Piechart'));

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    fetchTransactions();
  }, [selectedMonth, searchQuery, page]);

  const fetchTransactions = async () => {
    try {
      const params = new URLSearchParams();
      if (selectedMonth) params.append('month', selectedMonth);
      if (searchQuery) params.append('search', searchQuery);
      params.append('page', page);
      params.append('perPage', perPage);

      const response = await fetch(`/api/allorders?${params.toString()}`);
      const data = await response.json();
      // Handle data here

    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  return (
    <div className="appContainer">
      <div className="navbar">
        <div className="logo">Dashboard</div>
        <div className="navItems">
          <SearchBar className="searchBar" setSearchQuery={setSearchQuery} />
          <Dropdown className="dropdown" selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
        </div>
      </div>
      <div className="mainContent">
        <div className="contentarea">
          <Statistics selectedMonth={selectedMonth} />
          <TransactionsTable
            selectedMonth={selectedMonth}
            searchQuery={searchQuery}
            page={page}
            perPage={perPage}
            setPage={setPage}
          />
          <Suspense fallback={<div>Loading Barchart ...</div>}>
           <Barchart selectedMonth={selectedMonth} />
          </Suspense>
          <Suspense fallback={<div>Loading PieChart...</div>}>
            <PieChart selectedMonth={selectedMonth} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
