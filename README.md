# Notes Application

## Overview

This Notes Application allows users to create, view, and manage their personal notes efficiently. It is built using JavaScript and JSON for data storage.

## Features

- **Create Note**: Users can add new notes with a title and body.
- **View Notes**: Users can view all their notes in a structured format.
- **Manage Notes**: Users can delete existing notes.

## Files

- **app.js**: This is the main JavaScript file that contains the core logic for the application.
- **notes.js**: This file provides utility functions to support the main application logic.
- **note.json**: This JSON file serves as the data store for the notes.

## Getting Started

### Prerequisites

- Make sure you have Node.js installed on your machine.

### Installation

1.Clone the repository to your local machine.

```bash
git clone https://github.com/Mohammed-Mohad/Note-App.git
```

2.Navigate to the project directory

```bash
cd note-app
```

3.Install the npm dependencies

```bash
npm install
```

## Usage

1. **Run the Application:**

```bash
node app.js
```

2. **Creating a Note:**

- open the terminal and navigate to the project directory
- Run the following command:

```bash
node app.js add --title="your note title" --body="your note body"
```

3. **Viewing Notes:**

- To view all notes,run the following command

```bash
node app.js list
```

4. **Reading a Note:**

- To read a specific note,run:

```bash
node app.js read --title="Your Note Title"
```

5. **Removing a Note:**

- To delete a Note,run:

```bash
node app.js remove --title="Your Note Title"
```

## Examples

### Adding a Note

```bash
node app.js add --title="Best Anime" --body="Attack on titan"
```

### Listing All Notes

```bash
node app.js list
```

### Reading a Note

```bash
node app.js read --title="Best Anime"
```

### Removing a Note

```bash
node app.js remove --title="Best Anime"
```

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bugfix.

3. Commit your changes and push the branch to your fork.

4. Submit a pull request with a description of your changes.

## Contact

If you have any questions or suggestions, feel free to reach out.
