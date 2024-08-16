# Backend Setup for Roxiler MERN Stack Challenge


## Getting Started

To set up and run the backend application, follow these steps:

1. **Clone the Repository**

   If you haven't cloned the repository yet, do so with the following command:

   ```bash
   git clone https://github.com/Mrunal-Yechakar/roxiler-mern-stack-challenge.git
   
2. **Navigate to the Backend  Directory**

   Change into the backend directory:

   ```bash
   cd roxiler-mern-stack-challenge/backned
   
3. **Install Dependencies**

   Install the required npm packages:

   ```bash
   npm install

4. **Start the Development Server**

   Start the frontend development server:

   ```bash
   npm start

## API Endpoints 

1. ### Fetch all Orders
   
    **Endpoint**: GET /api/allorders
   
    **Description**: Retrieves a list of all orders.
   
    **Query Parameters**:
      - search (optional): Search query for filtering orders.
        
      - month (optional): Month to filter orders by.
        
      - page (optional): Page number for pagination.
        
      - perPage (optional): Number of items per page.
        
    
   ```bash
   http://localhost:1234/api/allorders

2. ### Fetch Statistics
 
   **Endpoint**: GET /api/statistics
   
   **Description**: Retrieves statistics such as total sales, sold items, and unsold items for the selected month.
   
   **Query Parameters**:
   
    - month (optional): Month for which to retrieve statistics.
      
   ```bash
   http://localhost:1234/api/statistics
   
3. ### Fetch Bar Chart Data
   
    **Endpoint**: GET /api/barchart
   
    **Description**: Retrieves data for displaying a bar chart of sales based on price ranges for the selected month.
   
    **Query Parameters**:
   
    - month (optional): Month for which to retrieve bar chart data.
      

   ```bash
   http://localhost:1234/api/barchart
   
4. ### Fetch Pie Chart Data
   
   **Endpoint**: GET /api/piechart
   
   **Description**: Retrieves data for displaying a pie chart of sales by category for the selected month.
   
   **Query Parameters**:
   
    - month (optional): Month for which to retrieve pie chart data.
      

   ```bash
   http://localhost:1234/api/piechart
