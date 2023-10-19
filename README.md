# File Upload and Download Node.js Server

A simple Node.js server that allows users to upload and download files.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Endpoints](#endpoints)
- [Folder Structure](#folder-structure)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- npm (Node Package Manager) installed on your machine
- A basic understanding of Node.js, Express, and file handling.

## Getting Started

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nesaranp/file-upload-download.git

2. change into the project directory:
  cd file-upload-download

3. Install the project dependencies:
  npm install

### Usage

1. Start the server:
  npm start

2. The server should now be running at http://localhost:3000.

## Endpoints
POST /uploadfile: Use this endpoint to upload a file to the server. You can use tools like Postman or curl to send a POST request with the file as a form-data field.

GET /public/:filename: Use this endpoint to download a file from the server. Replace :filename with the name of the file you want to download.

## Folder Structure
index.js: The main server file.
uploads/index.html: Upload file HTML page.
public/: You can place any static assets or files you want to serve to users here and uploaded files are stored.

```bash
file-upload-download/
├── index.js
├── uploads/index.html
├── public/
├── README.md
└── package.json
```
