import App from "./App"
import MainPage from "./components/home/MainPage"
import ReplyPage from './components/replies/ReplyPage'
const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "ReplyPage", element: <ReplyPage /> },
      ],
    },
  ];
  
export default routes;