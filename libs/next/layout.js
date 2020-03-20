import Link from 'next/link';

const Nav = () => (
    <nav>
        <ul>
            <li>
                <Link href="/service-a">
                    <a>Service A</a>
                </Link>
            </li>
            <li>
                <Link href="/service-b">
                    <a>Service B</a>
                </Link>
            </li>
        </ul>

    </nav>
);

const Layout = ({ children }) => {

    return (
        <>
            <h1>App</h1>
            <Nav />
            {children}
        </>
    )
};

export default Layout;
