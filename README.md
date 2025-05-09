# Node.js MongoDB API Challenge

## Description
This solution implements a RESTful API endpoint that retrieves user details from MongoDB with age restriction. The API features:

- Robust error handling for invalid ObjectIDs
- Age filtering (only returns users > 21 years old)
- Proper HTTP status codes and JSON responses
- MongoDB database integration
- Environment variable configuration

## Features
✔️ GET `/users/:id` endpoint  
✔️ Age restriction (21+ only)  
✔️ Comprehensive error handling  
✔️ MongoDB connection  
✔️ Clean JSON responses  

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB (local or remote)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/bryce92/nodejs-mongodb-api.git
