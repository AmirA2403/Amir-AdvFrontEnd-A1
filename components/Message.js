// Message component that displays a text message passed as a prop
export default function Message({ message }) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '10px' }}>
        <h3>Message Component</h3>
        <p>{message}</p>
      </div>
    );
  }
  