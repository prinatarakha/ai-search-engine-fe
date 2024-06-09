import Form from '@/components/Form';
import Link from 'next/link';

export default function Page() {


  return (
    <div>
      <h1>This is search page</h1>
      <br></br>
      <br></br>
      
      <Form />

      <br></br>
      <br></br>
      <Link href="/library">Go to Library</Link>
    </div>
)
}