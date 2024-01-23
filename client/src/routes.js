import App from "./App"
import MainPage from "./components/home/MainPage"
import ReplyPage from './components/replies/ReplyPage'
import StatsPage from './components/statistics/StatsPage'
import CompaniesPage from './components/companies/CompaniesPage'
const routes = [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <MainPage /> },
        { path: "/ReplyPage", element: <ReplyPage /> },
        { path: "/Statistics", element: <StatsPage /> },
        { path: "/Companies", element: <CompaniesPage /> },
      ],
    },
  ];
  
export default routes;