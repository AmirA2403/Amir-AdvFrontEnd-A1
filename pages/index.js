import Link from 'next/link';
import Message from '../components/Message';
import UserForm from '../components/UserForm';

// Home component that serves as the main landing page
export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Welcome to My React-Next.js Web Application!</h1>
      <Message message="This is a dynamic message passed via props!" />
      <UserForm />
      {/* Navigation menu to access other features */}
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link href="/counter">Counter Feature</Link></li>
          <li><Link href="/toggle">Toggle Feature</Link></li>
        </ul>
      </nav>
    </div>
  );
}
