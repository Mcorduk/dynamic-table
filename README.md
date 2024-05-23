## Dynamic Cryptocurrency Exchange Rate Table

This project provides a user-friendly table data to explore real-time cryptocurrency exchange rates. It fetches data from CoinAPI and displays it in a dynamic, interactive table.

**Features:**

* **Real-time Data:** Access up-to-date cryptocurrency exchange rates.
* **Dynamic Table:** Leverage jQuery DataTables for a searchable, sortable, and responsive table experience.
* **Export Options:** Effortlessly export data to various formats like CSV, Excel, PDF, or print for further analysis.
* **Additional:** Responsive table that works on both mobile and desktop. Ability to change order of columns.

**Technologies:**

* **HTML/CSS:**  For building the web page structure and styling.
* **JavaScript:** Handles data fetching and DOM manipulation.
* **jQuery:** Simplifies DOM manipulation and event handling.
* **jQuery DataTables:** Creates the interactive table.
* **Axios:** Facilitates HTTP requests to the CoinAPI.
* **CoinAPI:** Provides the source for cryptocurrency exchange rate data (requires an API key).

**Getting Started:**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/mcorduk/dynamic-table.git
   ```


2. **Open the Application:** Launch `index.html` in your web browser.

**Deployment:**

This project is deployed in github actions. Live Preview here: https://mcorduk.github.io/dynamic-table/


**License:**

This project is open-source under the MIT License.

**Note:**

A CoinAPI API key is necessary to fetch data. The API key is exposed in this project as it is 
a free API key.
Please obtain your own key from their website.
