import { useRouter } from 'next/router';
function ClientsProject(){
    const router = useRouter();
    function HandleClick(){
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: { id: 'max', clientprojectid: 'projecta' }
        });
    }
    return <div>
        <h1>The Projects of a Given Client</h1>
        <button onClick={HandleClick}>Load Project A</button>
    </div>
}

export default ClientsProject;