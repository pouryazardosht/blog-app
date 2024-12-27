import Navbar from '../components/Navbar'

function Layout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='mt-5' >{children}</main>
        </>
    )
}

export default Layout