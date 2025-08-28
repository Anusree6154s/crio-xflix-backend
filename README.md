<div align="center">
    <img src="https://crio-directus-assets.s3.ap-south-1.amazonaws.com/939aec42-d73b-4007-8369-c420055f4e33.png" width="100"/>
    <h1 id="title">XFlix Node - Backend</h1>
    <p><strong>Backend for XFlix - A video sharing platform</strong></p>
    <p>
      <a href="https://xflix-backend-vmhx.onrender.com/v1/videos/docs">Backend API Documentation</a> •
      <a href="https://github.com/Anusree6154s/xflix-frontend">XFlix Frontend Github</a> •
      <a href="https://xflix-frontend-hazel.vercel.app">XFlix Frontend Website</a>
    </p>
    <img src="https://github.com/user-attachments/assets/922d3a25-a28f-4a20-aa53-b76de376df02" width="700"/>
</div>


## Table of Contents
1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Project Breakdown](#project-breakdown)


## Project Overview


<p align="center">
<img src="https://github.com/user-attachments/assets/b2f2957b-28b4-493e-b960-ed13aa7bee9b" width="600" id="image"/>
</p>
<p id="description">XFlix Node is a video sharing platform that allows users to watch and upload videos using external links (e.g., YouTube). This project covers the backend of Xflix node.</p>

### Built With:
- **Node.js**: For server-side development.
- **Express.js**: To create RESTful APIs easily.
- **MongoDB**: For data persistence.
- - **Mongoose**: For creating MongoDB schemas and validating them.
- **Postman**: For API testing and documentation.

### Features: 
- RESTful API implementation.
- Video title search functionality.
- Filtering by genres and content ratings.
- Sorting by upload date and view count.

## Setup Instructions

1. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/Anusree6154s/xflix-backend.git

   # Navigate to the project directory
   cd xflix-backend

   # Install dependencies
   npm install
   ```

3. **Set up environment variables:**
   - In `.env` file in the root directory
     ```
     NODE_ENV = your_port
     MONGO_URI = your_mongodb_uri
     ```

5. **Start the server:**
   ```bash
   npm start
   ```
   The server should be running on `http://localhost:PORT/v1/videos`.


## Project Breakdown

### Project Structure
```
xflix-backend/
├── _CRIO_/           # Crio metadata
├── assessment/       # Crio assessment files
├── backend/          # Backend code implemented by me
│   ├── models/       # Database models
│   ├── index.js      # Server setup and configuration
│   └── server.js     # Routes
├── README.md         # Project documentation
├── package.json      # Project dependencies and scripts
└── runAssessment.sh  # Script to run assessments
```


### Technical Architecture
- #### Components:
  - **Node.js & Express.js**: Chosen for their non-blocking architecture and scalability, making it ideal for handling multiple requests simultaneously.
  - **MongoDB**: Used for its flexibility in data modeling, especially for unstructured video data.
- #### Deployment Architecture:
  - **Hosting**: Deployed on **Render** for it ease of use and automatic deployments.

<img src="https://directus.crio.do/assets/b08887c0-4590-42b7-9f75-675dedfb3f35?" width="350" align="right"/>

### Implemented Routes
- **GET /v1/videos**: Retrieve a list of videos.
- **GET /v1/videos/:videoId**: Retrieve details of a specific video.
- **POST /v1/videos**: Upload a new video.
- **PATCH /v1/videos/:videoId/votes**: Update votes for a video.
- **PATCH /v1/videos/:videoId/views**: Update view count for a video.

### Future Features
- [ ] User authentication and authorization.
- [ ] Commenting system for videos.
- [ ] User profiles to track uploaded videos.






