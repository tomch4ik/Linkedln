import './MainPages.css';
import { Outlet } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Sidebar_left } from './Components/Sidebar_left';
import { Sidebar_right } from './Components/Sidebar_right';
import { useLocation } from 'react-router-dom';

export function MainPages() {
  const location = useLocation();
  const path = location.pathname;

  const isMyProfilePortfolio = path === "/myProfilePortfolio";
  const isMessages = path === "/messages";

  return (
    <div className="app-layout">
      <Header maximal />

      <main className="main_page">
        {(isMyProfilePortfolio || isMessages) ? (
          <Outlet />
        ) : (
          <div className="container container--wide">
            <Sidebar_left />

            <div className="container">
              <Outlet />
            </div>

            <Sidebar_right />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
