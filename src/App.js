import React, { useState, useEffect } from 'react';
import './style.css';

function Hero(props) {
  return (
    <div>
      {props ? (
        <>
          <h2>{props.name}</h2>
          <h2>{props.title}</h2>
        </>
      ) : (
        <h2>Name</h2>
      )}

      <button onClick={props.onToggle}>Update</button>
    </div>
  );
}

export default function App() {
  const [title, setTitle] = useState('Python Developer');
  const [text, setText] = useState('OFF');
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    setName(`Count is ${count}`);
  }, [count]);
  return (
    <div>
      <h2>Hello {name}</h2>
      <h6>{count}</h6>

      <Hero
        name="Odoo Test"
        title={title}
        onToggle={() => {
          if (title === 'Python Developer') {
            setTitle('Odoo Developer');
          } else {
            setTitle('Python Developer');
          }
        }}
      />
      <button
        onClick={() => {
          text === 'OFF' ? setText('ON') : setText('OFF');
          text === 'ON' ? setCount(count - 1) : setCount(count + 1);
        }}
      >
        {text}
      </button>

      <br />
      <input
        placeholder="Enter........."
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

function Test() {
  const [name, setName] = useState('');
  const [saved, setSaved] = useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSaved(name);
      }}
    >
      <input
        placeholder="Your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button type="submit">Save</button>

      <h2>
        {saved}+{name}
      </h2>
    </form>
  );
}

export { Test, Test2, Hero };

function Test2() {
  return (
    <>
      {/* <h1>Thanks</h1>
      <Hero /> */}
    </>
  );
}

// export { Test2 };
