import React, { useCallback, useEffect, useState } from "react";
// Config
import { Switch, Route, BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { screen_size } from "config/screen";
import { GlobalContext } from "context";
import { getTheme } from "styles/themes";
// Components
import Routes from "routes";
import Landing from "pages/Landing";
// Functions
import { isAuthenticated } from "middlewares/authentication/user";

function App() {
  const [device, setDevice] = useState({ id: 0, name: undefined });
  const [themeName, setTheme] = useState('dark');

  const handleResize = useCallback(() => {
    const viewportWidth = window.innerWidth
    if (viewportWidth <= screen_size.mobile_sm && device.id !== 1) {
      window.removeEventListener('resize', handleResize)
      setDevice({ id: 1, name: 'mobile_sm' })
    } else if (viewportWidth > screen_size.mobile_sm && viewportWidth <= screen_size.mobile && device.id !== 2) {
      window.removeEventListener('resize', handleResize)
      setDevice({ id: 2, name: 'mobile' })
    } else if (viewportWidth > screen_size.mobile && viewportWidth <= screen_size.tablet && device.id !== 3) {
      window.removeEventListener('resize', handleResize)
      setDevice({ id: 3, name: 'tablet' })
    } else if (viewportWidth > screen_size.tablet && viewportWidth <= screen_size.desktop_sm && device.id !== 4) {
      window.removeEventListener('resize', handleResize)
      setDevice({ id: 4, name: 'desktop_sm' })
    } else if (viewportWidth > screen_size.desktop_sm && viewportWidth <= screen_size.desktop && device.id !== 5) {
      window.removeEventListener('resize', handleResize)
      setDevice({ id: 5, name: 'desktop' })
    } else if (viewportWidth > screen_size.desktop && viewportWidth <= screen_size.ultra_wide && device.id !== 6) {
      window.removeEventListener('resize', handleResize)
      setDevice({ id: 6, name: 'ultra_wide' })
    }
  }, [device])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (device.id === 0) handleResize()
  }, [device, handleResize]);

  const theme = getTheme(device.id, themeName)
  const chakraTheme = extendTheme({ ...theme })


  function test(params) {
    console.log('sidebar')
    return 'Sidebar'
  }

  return (
    <GlobalContext.Provider value={{ device, theme, setTheme }}>
      <ChakraProvider theme={chakraTheme}>
        <Router>
          <Switch>
            <Route exact path="/landing">
              <Landing />
            </Route>
            {isAuthenticated()
              ? <Route path="/">
                <div>{test()}</div>
                <Link to="/profile">Link</Link>
                <Routes />
              </Route>
              : <Redirect to="/landing" />}
          </Switch>
        </Router>
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;