import Navigation from '../components/Navigation';
import Head from 'next/head';

const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-sacale=1, shrink-to-fit=no" />
            <link rel="stylesheet" href="https://bootswatch.com/4/united/bootstrap.min.css" />
        </Head>
        <Navigation />
        <div className="container mt-4">
            {/* props.children => content inside the MasterPage in the other components */}
            {props.children}
        </div>
    </div>
)

export default MasterPage;