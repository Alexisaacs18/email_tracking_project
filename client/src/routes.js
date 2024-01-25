import App from "./App"
import MainPage from "./components/home/MainPage"
import StatsPage from './components/statistics/StatsPage'
import CompaniesPage from './components/companies/CompaniesPage'
import ContactsPage from "./components/contacts/ContactsPage"
import RepliesPage from "./components/replies/RepliesPage"
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/Replies", element: <RepliesPage /> },
      { path: "/Contacts", element: <ContactsPage /> },
      { path: "/Statistics", element: <StatsPage /> },
      { path: "/Companies", element: <CompaniesPage /> },
    ],
  },
];

export default routes;