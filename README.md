# Portfolio Website

[![React](https://img.shields.io/badge/React-blue?style=flat&logo=react&logoColor=white)](https://reactjs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat)](https://opensource.org/licenses/MIT)

A personal portfolio website built using **React**, deployed at
**[iagoporto.github.io/portfolio](https://iagoporto.github.io/portfolio/)**.

## Overview

This repository hosts my portfolio website, showcasing my work as a
**Software Engineer & Product Owner**: projects, experience, and skills with a
clean, editorial dark design.

![This is my personal portfolio](img/portfolio.png)

## Features

- **Responsive Design:** Adapts seamlessly to various screen sizes, with a
  hamburger navigation on mobile.
- **Design system:** CSS custom properties for colors and typography
  (Fraunces, Instrument Sans, Spline Sans Mono), consistent across components.
- **3D signature piece:** A self-contained WebGL crystal cube rendered with
  Three.js (no external assets).
- **Motion that respects users:** staggered load-in, scroll reveals, and a
  subtle cursor glow - all disabled under `prefers-reduced-motion`.
- **Component-Based Architecture:** Built with reusable React components.
- **Optimized Build:** Fast development and production builds.
- **Automated Quality Checks:** Formatting, linting, and testing steps are
  enforced via GitHub Actions.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/IagoPorto/portfolio.git
   cd portfolio
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

## Scripts
The following commands are available:

| Command	| Description|
|-----------|------------|
| npm run format:check	| Check code formatting with Prettier|
| npm run format:fix	| Automatically fix code formatting|
| npm run lint:check	| Check code for linting errors|
| npm run lint:fix	| Automatically fix linting issues|
| npm run test:coverage	| Run tests and display code coverage report|

## Continuous Integration
GitHub Actions are configured to run automatically on each Pull Request. These steps include:

- format:check
- lint:check
- test:coverage

This ensures that all code contributions meet the project's standards before being merged.

## Disclaimer
This code is provided as-is, without any warranties or guarantees. Use it at your own risk.

If you use any part of this code in your projects, please mention me and provide a link to this repository.

Also, ensure you comply with the terms of the MIT License and give appropriate credit.

## Contributions

Contributions are welcome! If you have ideas for improvements or bug fixes, please open an issue or submit a pull request following standard best practices.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
