import Navbar from '../components/Navbar'

function Layout({ children }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='mt-5 mb-16' >{children}</main>
        </>
    )
}

export default Layout