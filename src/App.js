import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/main';

// import Signin from './components/Signin';
import Dash from './components/Dashboard/dash';
import Goals from './components/Dashboard/Goals';
import Discover from './components/Discover';
import Comingsoon from './components/comingsoon';
import Expenses from './components/Dashboard/Expenses';
import Reminder from './components/Dashboard/Reminder';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dash",
    element: <Dash />
  },
  {
    path: "/goals",
    element: <Goals/>
  },
  {
    path: "/discover", 
    element: <Discover />,
  },
  {
    path:"/comingsoon",
    element: <Comingsoon/>
  },
  {
    path: "/expenses",
    element: <Expenses/>
  },
  {
    path: "/reminders"  ,
    element: <Reminder/>
  }
]);
function App() {
  return (
  
    <RouterProvider router={router} />
  
  );
}

export default App;
