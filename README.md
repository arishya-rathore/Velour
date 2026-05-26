#VELOUR
"Velour is a premium bilingual (Hindi/English) fashion e-commerce platform where anyone can buy and sell clothing, accessories, and lifestyle products — featuring modern capabilities such as AR live try-on, an outfit builder, and a personalised style profile.
## Tech Stack
**Frontend**
- React (Vite)
- React Router — page navigation
- Context API — global authentication state
- Axios — API requests with JWT interceptor
- Tailwind CSS — styling

**Backend**
- Node.js + Express — server and REST API
- MongoDB + Mongoose — database and schemas
- bcrypt — password hashing and verification
- JWT — token based authentication and protected routes

## Authentication
During login, the server verifies the user's credentials and generates a JWT token. This token consists of three parts: a header, a payload containing the user's ID, and a signature. The signature is created by combining the header and payload with a secret key (JWT_SECRET) stored securely in the server's environment variables. On every subsequent request, the server re-generates the signature and compares it with the token's signature — if they match, the request is authenticated; if they don't, the token has been tampered with and the request is rejected. Upon logout, the token is removed from the browser.

## Models
- User, Product, Cart, Order, Wishlist, Address, Review, Notification, Outfit.

## API Routes
- /auth — signup, login.
- /products, /cart, /orders, /wishlist, /address, /reviews, /notifications, /outfits.

