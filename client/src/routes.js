import App from "./App"
import MainPage from "./components/home/MainPage"

const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <MainPage /> },
      
      ],
    },
  ];
  
export default routes;