# SVG Optimization with SVGO

This repository contains the source code for a simple Node.js application that demonstrates how to optimize SVG files using the SVGO tool.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Stable version)

### Installation

1. Clone the repository:

```sh
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name

```

### Install dependencies

```sh
npm install

```

### Usage

Place your SVG files in the `/svg` directory.

Run the SVGO script to optimize the SVGs and generate optimized files in the dist folder:

```shell

npm run svgo

```

This command uses the SVGO configurations defined in `svgo.config.js``.

Optimized SVG files will be available in the dist folder.

### Configuration

The SVGO configurations can be found in svgo.config.js. Feel free to customize the configurations according to your needs.

**Resources**:

- [SVGO Documentation](https://github.com/svg/svgo)
- [SVG Repo](https://www.svgrepo.com/)

## License

This project is licensed under the MIT License.
