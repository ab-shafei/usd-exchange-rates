# 🌍 Exchange Rate Dashboard

A simple, real-time exchange rate dashboard that fetches currency data and visualizes it using charts.

## 🚀 Features

- Fetches real-time exchange rates from an external API.
- Displays exchange rate trends in an interactive **LineChart**.
- Redux for centralized state management.
- Responsive UI built with **TailwindCSS** and **ShadCN UI**.

## 🛠 Tech Stack

- **Frontend:** React, NextJS, Redux Toolkit, TypeScript
- **Styling:** TailwindCSS, ShadCN UI
- **Charts:** Recharts
- **State Management:** Redux Toolkit
- **API Calls:** Fetch API (or Axios)

## 📦 Setup & Installation

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/ab-shafei/usd-exchange-rates.git
   cd usd-exchange-rates
   ```

2. **Install dependencies:**

   ```sh
   npm install  # or yarn install
   ```

3. **Set up environment variables:**

   - Create a `.env` file in the root directory.
   - Use `.env.example` as reference

4. **Start the development server:**

   ```sh
   npm run dev  # or yarn dev
   ```

5. **Build for production:**
   ```sh
   npm run build
   ```

## 📝 Implementation Approach

1. **Data Fetching:**

   - Used `createAsyncThunk` to fetch exchange rate data on initial load.
   - Utilized Redux Toolkit to store fetched data.

2. **State Management:**

   - Implemented Redux to maintain the exchange rates globally.
   - Created a Redux slice to handle API responses and state updates.

3. **Data Visualization:**

   - Used `Recharts` to plot exchange rates over time.
   - Implemented a **LineChart** to display currency trends dynamically.

4. **UI & Responsiveness:**
   - Designed with **TailwindCSS** and **ShadCN UI** components.
   - Ensured the dashboard adapts to different screen sizes.

## 🤝 Contributing

Contributions are welcome! To contribute:

- Fork the repository
- Create a new branch (`feature-name`)
- Make your changes and commit
- Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
