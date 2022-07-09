import path from 'path';
import React from 'react';

import { AppShell } from 'ui';
import Moviescontent from './MoviesContent';

function App() {
    return <AppShell
        title="Movies"
        routes={[
            {
                path: "/",
                element: Moviescontent,
            },
            {
                path: "/playlist",
                element: () => <div>Playlist</div>,
            }
        ]}
        navLinks={[
            {
                label: "Home",
                path: "/",
            },
            {
                label: "Playlist",
                path: "/playlist",
            }
        ]}
        colorScheme="dark"
    />;
}

export default App;
