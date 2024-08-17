import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/statistics.css';

const Statistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({
    totalSales: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const url = selectedMonth
          ? `https://backend-0mh3.onrender.com/api/statistics/${selectedMonth}`
          : `https://backend-0mh3.onrender.com/api/statistics`;

        const response = await axios.get(url);

        if (response.data) {
          setStatistics(response.data);
        } else {
          console.warn('No data returned from API');
        }
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, [selectedMonth]);

  return (
    <div className="statistics-container">
      <h3>Transactions Statistics</h3>
      <p>Total Sale Amount: <span className="stat-value">{statistics.totalSales.toFixed(2)} Rs</span></p>
      <p>Total Sold Items: <span className="stat-value">{statistics.totalSoldItems}</span></p>
      <p>Total Not Sold Items: <span className="stat-value">{statistics.totalNotSoldItems}</span></p>
    </div>
  );
};

export default Statistics;
