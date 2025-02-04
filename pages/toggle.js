import Link from 'next/link';
import Toggle from '../components/Toggle';

export default function TogglePage() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Toggle Page</h1>
      <Toggle />
      <br />
      <Link href="/">Back to Home</Link>
    </div>
  );
}
