import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: "God Matt - Rett Hjem",
    description: 'Vi leverer god mat rett hjem med våre ukentlige abonnementsmåltider og catering tjeneste for alle dine fester og sammenkomster.'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout
