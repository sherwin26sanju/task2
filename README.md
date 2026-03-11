# Task 2: React CRUD UI

A modern React-based user interface for managing tasks with full CRUD functionality. This is the frontend companion to the Task 1 API.

## Features

- ✅ Create new tasks
- ✅ Read and display all tasks
- ✅ Edit existing tasks
- ✅ Delete tasks
- ✅ Real-time state management with React hooks
- ✅ React Router for navigation
- ✅ Axios for API communication
- ✅ Loading and error states
- ✅ Responsive design
- ✅ Fast reload with Vite HMR

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool with hot module reload
- **React Router 7** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS** - Custom styling

## Project Structure

```
Task 2/
├── src/
│   ├── api/
│   │   └── tasks.js              # API client with axios
│   ├── components/
│   │   └── TaskForm.jsx          # Form component for create/edit
│   ├── pages/
│   │   ├── Home.jsx              # Display all tasks
│   │   ├── CreateTask.jsx        # Create new task page
│   │   └── EditTask.jsx          # Edit existing task page
│   ├── App.jsx                   # Router setup
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Global styles
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Task 1 API running on `http://localhost:3000`

### Setup

```bash
# Navigate to project
cd Task\ 2

# Install dependencies
npm install

# Create .env.local file (optional)
echo VITE_API_URL=http://localhost:3000 > .env.local
```

## Running the Application

### Development
```bash
npm run dev
```
The application will start on `http://localhost:5173` with hot module reload (HMR).

### Production Build
```bash
npm run build
```
Creates optimized build in the `dist/` folder.

### Preview Build
```bash
npm run preview
```
Preview the production build locally.

### Lint Code
```bash
npm run lint
```
Checks code quality with ESLint.

## Pages & Features

### Home Page (`/`)

Displays all tasks from the API.

**Features:**
- Fetches tasks on page load
- Shows loading state while fetching
- Displays error message if fetch fails
- Shows each task with title and description
- Edit button for each task
- Delete button with immediate UI update
- "Create Task" button to navigate to create page

**API Calls:**
- `GET /tasks` - Fetches all tasks
- `DELETE /tasks/:id` - Deletes a task

### Create Task Page (`/create`)

Form to create a new task.

**Features:**
- Form inputs for title and description
- Form submission handling
- API call to create task
- Redirect to home page after creation
- Error handling

**API Calls:**
- `POST /tasks` - Creates new task

### Edit Task Page (`/edit/:id`)

Form to edit an existing task.

**Features:**
- Loads task data on mount
- Pre-fills form with current data
- Submit to update task
- Redirect to home page after update
- Error handling

**API Calls:**
- `GET /tasks/:id` - Fetches single task
- `PUT /tasks/:id` - Updates task

## API Integration

### API Client (`src/api/tasks.js`)

Configured axios instance with environment variable for base URL.

```javascript
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000"
});

export const getTasks = () => API.get("/tasks");
export const getTask = (id) => API.get(`/tasks/${id}`);
export const createTask = (data) => API.post("/tasks", data);
export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
```

**Environment Variable:**
- `VITE_API_URL` - Base URL for API (default: `http://localhost:3000`)

## Component Overview

### TaskForm Component
A reusable form component used in both Create and Edit pages.

**Props:**
- `initialData` - Pre-filled form data (optional, for edit)
- `onSubmit` - Callback function after form submission

### Home Component
Main task listing page with CRUD operations.

**State:**
- `tasks` - Array of tasks from API
- `loading` - Loading state
- `error` - Error message

### EditTask Component
Loads task data and provides edit form.

**Features:**
- Fetches task by ID from URL param
- Passes data to TaskForm
- Handles form submission for updates

### CreateTask Component
Provides form to create new tasks.

**Features:**
- Empty TaskForm for new entry
- Handles form submission for creation

## Usage Examples

### Starting the Full Stack

**Terminal 1 - Start Backend (Task 1):**
```bash
cd Task\ 1
npm run dev
```

**Terminal 2 - Start Frontend (Task 2):**
```bash
cd Task\ 2
npm run dev
```

**Browser:**
- Open `http://localhost:5173`

### Typical User Flow

1. **View Tasks**: Home page loads and displays all tasks
2. **Create Task**: Click "Create Task" button → Fill form → Submit → Back to home
3. **Edit Task**: Click "Edit" on a task → Modify data → Submit → Back to home
4. **Delete Task**: Click "Delete" on a task → Immediately removed from list

## Error Handling

### API Errors
- Fetch errors are displayed to the user
- Loading state prevents multiple submissions
- Invalid task IDs return 404 from API

### Form Validation
- Required fields checked
- Invalid data formats handled by API

### Network Issues
- Connection failures displayed as error messages
- User can retry by refreshing or re-submitting

## Styling

Custom CSS with:
- Flexbox layout
- Responsive design
- Task cards for each item
- Buttons for actions (Edit, Delete, Create)
- Loading and error state styling

**CSS Classes:**
- `.home` - Main container
- `.tasks` - Task list container
- `.task` - Individual task card
- `.link` - Buttons and links
- `.buttons` - Action buttons group

## Environment Variables

Create `.env.local` file in project root:

```env
# Backend API URL
VITE_API_URL=http://localhost:3000
```

Or the application will use the default: `http://localhost:3000`

## ESLint Configuration

The project uses ESLint for code quality checking.

**Run linter:**
```bash
npm run lint
```

**Configuration includes:**
- React best practices
- React Hooks rules
- React Refresh rules

## Performance

### Vite Features
- Fast development server with HMR
- Optimized production builds
- ES modules for faster loading

### React Optimization
- Functional components with hooks
- Conditional rendering to avoid unnecessary renders
- Loading states to prevent XSS from stale data

## Troubleshooting

### API Connection Error
**Problem:** Cannot connect to backend API

**Solutions:**
1. Ensure Task 1 API is running on port 3000
2. Check `VITE_API_URL` in `.env.local`
3. Verify CORS is enabled in backend
4. Check browser console for error details

### Tasks Not Loading
**Problem:** Home page shows loading but never completes

**Solutions:**
1. Verify API is responding: `curl http://localhost:3000/tasks`
2. Check Network tab in DevTools for API call
3. Look for error messages in console

### Form Submission Error
**Problem:** Cannot create or edit tasks

**Solutions:**
1. Check form field names match API requirements
2. Verify task data is valid (title required)
3. Check API validation in Task 1 models
4. Look at API error response in Network tab

### Port Already in Use
**Problem:** `Error: Port 5173 is already in use`

**Solutions:**
1. Kill process using port 5173:
   ```bash
   # Windows
   netstat -ano | findstr :5173
   taskkill /PID <PID> /F
   
   # Linux/Mac
   lsof -i :5173
   kill -9 <PID>
   ```
2. Or specify different port: `npm run dev -- --port 3000`

### Build Errors
**Problem:** `npm run build` fails

**Solutions:**
1. Clear cache: `npm cache clean --force`
2. Delete `node_modules`: `rm -rf node_modules && npm install`
3. Check for syntax errors: `npm run lint`

## Building for Production

```bash
# Build optimized production bundle
npm run build

# This creates /dist folder with:
# - index.html
# - assets with JS and CSS
# - Ready to deploy

# To test production build locally:
npm run preview
```

## Deployment

### Prerequisites
- Production API URL (Task 1 deployed)
- Update `VITE_API_URL` environment variable

### Build Steps
1. Update API URL in deployment environment
2. Run `npm run build`
3. Deploy `dist/` folder to:
   - Vercel
   - Netlify
   - GitHub Pages
   - Any static hosting

### Environment Variables for Deployment
```env
VITE_API_URL=https://your-api-domain.com
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Use React DevTools Profiler to identify slow components
- Implement React.memo() for frequently re-rendered components
- Use useCallback() for memoized callbacks
- Lazy load pages with React.lazy()
- Implement virtual scrolling for large task lists

## Security Considerations

- Never hardcode API URLs (use environment variables)
- Validate all user inputs
- Sanitize API responses before displaying
- Implement CORS properly on backend
- Use HTTPS in production
- Implement input DOMPurify for user-generated content

## Development Workflow

1. Create feature branch
2. Make changes with `npm run dev`
3. Test in browser with HMR
4. Run `npm run lint` before committing
5. Run `npm run build` to verify production build
6. Submit pull request