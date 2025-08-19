import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './routes/AppRoutes';
import { MembersProvider } from './app/modules/members';

function App() {
  return (
    <>
      <BrowserRouter>
        <MembersProvider>
          <AppRoutes />
        </MembersProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
