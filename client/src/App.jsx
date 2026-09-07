import './App.css'
function App() {
  return (
    <>
      <header>
        <div className="logo">AAD App</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/profile">Profile</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <h1>Home Overview</h1>
        <p>Welcome to the Application Dashboard</p>

        <div className="card">
          <h2>Getting Started</h2>
          <p>Learn more about modular components.</p>
          <button>Explore Features</button>
        </div>
      </main>

      <footer>
        © 2026 AAD Project. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;