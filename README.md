# Dashboard Cielo
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Libs](#libs)

## Introduction

**Dashboard Cielo** is my approach regarding the FrontEnd Challenge given by Cielo in conjunction with AdaTech.

## Installation

Follow this steps to correctly install the application:

```bash
# Clone the repository
git clone https://github.com/brunobarqueta/dashboard-cielo.git

# Navigate to the project directory
cd dashboard-cielo

# Install dependencies
# The recommended node version is v18.16.0
npm install
```

## Usage

Follow the steps below to run the aplication correctly:

```bash
# Open a prompt in project root
# Start the API
json-server --watch data.json --port 8000

# Open another prompt
# Start the development server
npm run start

# For tests run:
npm test

# Obs: couldn't finish the tests due to the time limitation
```

## Features

Below are the features of the dashboard.

- **Dashboard Page**: The user can view and analyze graphs and other data, hover on them to see more details and numbers, and also see a preview of the Transactions page, showing the last 10 transactions.
- **Transaction Page**: The user can see a table with various information about the transactions, it's also possible to search for transactions by card brand.
- **Dark Mode**: On the right top side of the screen the user can see a Sun/Moon icon that when clicked change the theme of the application.

## Libs used

- **React**: React was the javascript framework of choice for this project.
- **Tailwind/DaisyUI**: DaisyUI it's a component library for tailwind and was the choosed UI framework.
- **Redux Toolkit**: Redux Toolkit was tool choosed for state management.
- **ChartJS**: ChartJS was used for the graphs and charts.
- **React Testing Library**: React Testing Library was the testing library choosed.