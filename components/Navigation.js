import Link from 'next/link';

const Navigation = () => (

    <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
            <Link href="/"><a className="navbar-brand">Bitcoin</a></Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link">Introduction</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/aboutus"><a className="nav-link">About Us</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navigation;