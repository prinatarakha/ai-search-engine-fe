import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1>This is Home page</h1>


      <br></br>
      <Link href="/search">Go to Search</Link>
      <br></br>
      <Link href="/library">Go to Library</Link>
    </div>
)
}