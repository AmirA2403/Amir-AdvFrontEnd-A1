import { useState } from 'react';
import styles from '../styles/UserForm.module.css';

// UserForm component that allows users to enter their name and get a greeting
export default function UserForm() {
    // State to store the entered name
    const [name, setName] = useState('');
    //State to store the greeting message
    const [greeting, setGreeting] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setGreeting(name.trim() === '' ? 'Please enter your name.' : `Hello, ${name}!`);
    };

    return (
        <div className={styles['user-form']}>
            <h2>User Form</h2>
            <form onSubmit={handleFormSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
            {greeting && <p>{greeting}</p>}
        </div>
    );
}
