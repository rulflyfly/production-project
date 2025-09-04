import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { AboutPageAsync } from './Pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './Pages/MainPage/MainPage.async';
import { Suspense } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';




const App = () => {
  
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync/>}/>
                <Route path={'/'} element={<MainPageAsync />}/>
            </Routes>
        </Suspense>
    </div>
  )
}

export default App;