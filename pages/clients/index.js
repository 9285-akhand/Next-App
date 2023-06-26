import Link from "next/link";
function Client() {
    const clients = [
        { id: 'max', name: 'Maximilian' },
        { id: 'anna', name: 'Anna' }
    ]
    return <div>
        <h1>Client Page
            <ul>
            {clients.map((client) =>
                <li key={client.id}>
                    <Link href={{
                        pathname: '/clients/[id]',
                        query: { id: client.id }
                    }}>{client.name}</Link>
                </li>
            )}
            </ul>
            </h1>
    </div>
}
        export default Client;