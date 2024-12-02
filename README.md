# React E-Commerce Application

A simple e-commerce application built using React with features such as user authentication, product management, and a shopping cart. The application is state-managed using React Redux and local state, with no backend.

---

## Features

### User Authentication

- **Sign Up**: Register with name, email, and password (basic form validation included).
- **Login**: Authenticate users with email and password.
- **Authentication State**: Managed with React Redux to persist user login status.

### Product List and Management

- Display a list of products with:
  - Name
  - Price
  - Description
  - Image

### Shopping Cart

- **Add to Cart**: Users can add products to the cart.
- **View Cart**: Display items in the cart with:
  - Quantity
  - Individual prices
  - Total price
- **Update Quantity**: Users can adjust the quantity of each item.
- **Remove Item**: Remove individual items from the cart.
- **Total Cost**: Automatically calculates the total cost.

---

## Bonus Features

- **Client-Side Routing**: Routes for login/register, product list, and shopping cart using React Router.
- **Local Storage**: Persist shopping cart and authentication state across page reloads.
- **Search and Filter**: Filter products by name, price, or category.

Here's a README.md file tailored to your React project based on the provided documentation:

markdown
Copy code

# React E-Commerce Application

A simple e-commerce application built using React with features such as user authentication, product management, and a shopping cart. The application is state-managed using React Context and local state, with no backend.

---

## Features

### User Authentication

- **Sign Up**: Register with name, email, and password (basic form validation included).
- **Login**: Authenticate users with email and password.
- **Authentication State**: Managed with React Context to persist user login status.

### Product List and Management

- Display a list of products with:
  - Name
  - Price
  - Description
  - Image

### Shopping Cart

- **Add to Cart**: Users can add products to the cart.
- **View Cart**: Display items in the cart with:
  - Quantity
  - Individual prices
  - Total price
- **Update Quantity**: Users can adjust the quantity of each item.
- **Remove Item**: Remove individual items from the cart.
- **Total Cost**: Automatically calculates the total cost.

---

## Bonus Features

- **Client-Side Routing**: Routes for login/register, product list, and shopping cart using React Router.
- **Local Storage**: Persist shopping cart and authentication state across page reloads.
- **Search and Filter**: Filter products by name, price, or category.

---

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-link>
   Navigate to the project directory:
   bash
   Copy code
   cd react-ecommerce-app
   Install dependencies:
   bash
   Copy code
   npm install
   ```

# or

yarn install
Running the Application
Start the development server:

bash
Copy code
npm start

# or

yarn start
The application will be available at http://localhost:3000.

# Design Decisions

State Management: React Redux was chosen for its simplicity in managing user and cart state without introducing additional libraries like Cntext.
Validation: Formik and Yup were used for robust form validation with clear feedback for users.
Responsiveness: The design is fully responsive, ensuring usability across devices.

# Technologies Used

React: Frontend framework
React Router: For client-side routing
Formik & Yup: For form handling and validation
Local Storage: To persist user and cart data across sessions
CSS Modules/Tailwind CSS/ShadCN UI component library: For styling

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-link>
   Navigate to the project directory:
   bash
   Copy code
   cd react-ecommerce-app
   ```

Install dependencies:
bash
Copy code
npm install

# or

yarn install
Running the Application
Start the development server:

bash
Copy code
npm run dev

# or

yarn run dev

The application will be available at http://localhost:3000.
