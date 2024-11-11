# ToDo List App

A simple, responsive ToDo List app built with React and Tailwind CSS. Users can add tasks with a title and description, view the list of tasks, and delete tasks as needed.

## Features

- **Add Tasks**: Input title and description to create a new task.
- **Delete Tasks**: Remove tasks from the list with a single click.
- **Responsive Design**: Adjusts to different screen sizes (100% width for smaller screens and 50% for larger screens).
- **Custom Styling**: Styled with Tailwind CSS for a modern and clean look.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/repository-name.git

## Code Overview

The main component, `Page`, manages the task list and includes the following key functions:

- **submitHandler**: Adds a new task to the list by taking the title and description from the input fields.
- **deleteHandler**: Removes a task from the list based on the index.
- **Conditional Rendering**: Displays tasks if available; otherwise, shows a "No Task Available" message to indicate an empty list.

## Usage

- **Add Task**: Fill in the title and description fields, then click "Add Task" to add the task to the list.
- **Delete Task**: Click "Delete" next to any task to remove it from the list.

## Technologies Used

- **React**: Used for building the user interface and managing state.
- **Tailwind CSS**: Used for styling and implementing responsive design.
