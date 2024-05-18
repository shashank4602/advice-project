import React, { useState, useEffect } from 'react';

function App() {
    const [advice, setAdvice] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => setAdvice(data.slip.advice))
            .catch(error => setError(error));
    }, []);

    return (
        <div>
            <h1>Advice of the Day</h1>
            {error ? (
                <p>Error fetching advice: {error.message}</p>
            ) : (
                <p>{advice}</p>
            )}
        </div>
    );
}

export default App;
