import Link from 'next/link';
import Counter from '../components/Counter';

export default function CounterPage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Counter Page</h1>
      <Counter />
      <br />
      <Link href="/">Back to Home</Link>
    </div>
  );
}
