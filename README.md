
# Crio Module: XFlix Backend

XFlix is a video sharing platform that allows users to watch and upload videos using external links (e.g., YouTube). The platform provides a seamless experience for users to discover, upload, and engage with video content.

#### Deployment URLs
- [XFlix Backend](https://xflix-backend-vmhx.onrender.com/v1/videos)
- [XFlix Backend API Doc](https://www.postman.com/lunar-module-geoscientist-23775876/workspace/xflix-backend-api/collection/33572999-b25f21c7-a152-487f-a21b-8bc8d0ee856e?action=share&creator=33572999)
## Overview

During the course of this project, the following features were implemented:

- Built the XFlix backend from scratch using **Node.js**, **Express.js**, and **MongoDB**.
- Implemented a set of RESTful APIs according to the defined API contract.

<img src="https://directus.crio.do/assets/a894170d-e25e-4c00-a804-0b021d3ad2bb?" alt="XFlix API Contract in Postman" width="400"/>

## Scope of Work

### Implemented REST APIs

- **GET** `/v1/videos`: Retrieve a list of videos.
- **GET** `/v1/videos/:videoId`: Retrieve details of a specific video by its ID.
- **POST** `/v1/videos`: Upload a new video.
- **PATCH** `/v1/videos/:videoId/votes`: Update votes for a specific video.
- **PATCH** `/v1/videos/:videoId/views`: Update view count for a specific video.

### Enhanced Features for `GET /v1/videos` Endpoint

The `GET /v1/videos` endpoint was improved to support:

- **Video Title Search**: Search for videos by title.
- **Filtering**: 
  - By multiple genres.
  - By content rating.
- **Sorting**: 
  - By video upload date.
  - By view count.

### Data Persistence

Utilized **MongoDB** to persist video data effectively.


## Skills Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **REST API Development**
- **Postman** for API testing

## API Endpoints

<img src="https://directus.crio.do/assets/b08887c0-4590-42b7-9f75-675dedfb3f35?" alt="Request Variants Supported by GET /v1/videos Endpoint" width="400"/>

## Demo
<img src="https://github.com/user-attachments/assets/2476e234-0bda-445d-ae21-27a72a9691ba" alt="Backend Demo" width="600"/>

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Anusree6154s/xflix-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd xflix
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory and add your MongoDB connection string:
     ```
     MONGODB_URI=your_mongodb_uri
     ```
5. Start the server:
   ```bash
   npm start
   ```
6. The server should be running on `http://localhost:PORT/v1/videos`.

## API Documentation

For detailed information on the API endpoints, you can refer to the [Postman API Collection](https://www.postman.com/lunar-module-geoscientist-23775876/workspace/xflix-backend-api/collection/33572999-b25f21c7-a152-487f-a21b-8bc8d0ee856e?action=share&creator=33572999).

