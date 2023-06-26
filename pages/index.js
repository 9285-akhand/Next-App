import Link from 'next/link';
function Home(){
    return <div>
        <h1>Welcome to Next.js!</h1>
        <Link href="/portfolio">Portfolio</Link>
        </div>
}
export default Home;