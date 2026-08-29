# To-Do App

A clean, lightweight to-do list web application built with vanilla HTML, CSS, and JavaScript. Tasks persist across browser sessions using the `localStorage` API — no backend or database required.

![To-Do App Preview](../images/Screenshot%20From%202026-08-29%2000-54-54.png)

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [License](#license)

## Features

- ➕ **Add tasks** by typing into the input field and hitting Enter or clicking **ADD**
- ✅ **Mark tasks complete** with a custom checkbox (strikethrough styling on completed items)
- 🗑️ **Delete tasks** with a single click
- 💾 **Persistent storage** — tasks are saved to `localStorage`, so your list survives page reloads and browser restarts
- ⚡ **Dynamic rendering** — the UI is always rebuilt from the underlying data array, keeping state and display in sync

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Minimal semantic markup |
| CSS3 | Styling for inputs, buttons, checkboxes, and task list |
| JavaScript (ES6, Vanilla) | DOM manipulation, event handling, localStorage persistence |
| Inline SVG | Checkbox tick and delete icons (no external image assets) |

No frameworks or external dependencies — pure HTML/CSS/JS.

## Project Structure

```
ToDo_App/
├── index.html          # Page markup (input form + empty task list container)
├── style.css           # Styling for the app and task items
├── app.js              # All application logic (add, complete, delete, persistence)
└── icons/               # SVG icons (done, delete)
```



## How It Works

The app keeps a single source of truth — an array of task objects (`allTodos`) — and re-renders the list from that array whenever it changes.

```js
// Each task is stored as:
{ text: "Study 8 hours", completed: false }
```

**Key functions in `app.js`:**

| Function | Responsibility |
|---|---|
| `addTodo()` | Reads the input, pushes a new task object, re-renders, and saves |
| `updateTodoList()` | Clears and rebuilds the `<ul>` from the `allTodos` array |
| `createTodoItem()` | Builds a single `<li>` with checkbox, label, and delete button, and wires up its event listeners |
| `deleteTodoItem()` | Removes a task by index and re-renders |
| `saveTodos()` / `getTodos()` | Serialize/deserialize the task array to and from `localStorage` |

Because the UI is always regenerated from `allTodos`, there's no risk of the displayed list drifting out of sync with the underlying data.

## Future Improvements

- Edit existing task text in place
- Filter tasks by status (All / Active / Completed)
- Drag-and-drop reordering
- Due dates and reminders

## License

This project is open source and available for personal and educational use.

---

**Author:** Samar Hussain
