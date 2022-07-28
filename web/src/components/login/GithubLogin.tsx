interface GithubLoginProps {
    authorizeUrl: string;
    clientId: string;
}

export function GithubLogin({ authorizeUrl, clientId }: GithubLoginProps) {
    const callAuthorize = async () => {
        const response = await fetch(`${authorizeUrl}?client_id=${clientId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });

        console.log(response);

        return await response.json();
    }

    return (
        <div className="flex justify-center items-center mx-4">
            <button 
                className="button w-full"
                onClick={callAuthorize}
            >Login with Github</button>
        </div>
    );
}