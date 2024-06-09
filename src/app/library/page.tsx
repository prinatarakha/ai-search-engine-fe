import Link from 'next/link';

type Thread = {
  id: number,
  searchInput: string,
  cleanedQuery: string | null,
  status: string,
  sources: string[],
  keyWords: string[],
  answer: string | null,
  createdAt: string,
  updatedAt: string,
}

export default async function Page() {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': process.env.API_KEY || 'apikey',
    }
  };
  const threadsResponse = await fetch(`${process.env.BACKEND_URL}/threads`, options);
  const threads: {threads: Thread[]} = await threadsResponse.json();
  const threadsComponents = threads.threads.map(thread => (
    <div>
      <h2>{thread.searchInput}</h2>
      <h3>status: {thread.status}</h3>
      <p>cleaned query: {thread.cleanedQuery}</p>
      <p>answer: {thread.answer}</p>
      <p>searched at: {thread.createdAt}</p>
      <br></br>
    </div>
  ));
  return (
    <div>
      <h1>This is Library page</h1>
      <p>These are the list of your search history</p>
      <br></br>

      {threadsComponents}

      <br></br>
      <Link href="/search">Go to Search</Link>
    </div>
)
}