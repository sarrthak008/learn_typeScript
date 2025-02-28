# 🚀 TypeScript Learning Journey

<div align="center">
  <img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" alt="TypeScript Logo" width="200"/>
</div>

## 📚 About This Repository

This repository documents my learning journey with TypeScript, Microsoft's typed superset of JavaScript that compiles to plain JavaScript. Here, I'll be storing code examples, exercises, and projects as I explore TypeScript's features and best practices.

## 🌟 What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript. It adds optional static types, classes, and modules to JavaScript, making it easier to develop robust applications, especially at scale.

### Key Features

- **Static Typing**: Add type annotations to variables, functions, and objects
- **Object-Oriented Features**: Classes, interfaces, modules, etc.
- **ECMAScript Compatibility**: Support for the latest JavaScript features
- **Great Tooling**: Excellent IDE support with intelligent code completion
- **Large Ecosystem**: Can use existing JavaScript libraries

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

```bash
# Install TypeScript globally
npm install -g typescript

# Check TypeScript version
tsc --version

# Initialize a new TypeScript project
tsc --init

#continue compile

tsc -watch


Basic TypeScript Configuration (tsconfig.json)

{
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}



###📝Learning Topics

Basic Types
Interfaces
Functions
Classes
Generics
Enums
Type Inference
Type Compatibility
Advanced Types
Modules
Decorators
