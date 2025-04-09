import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/userCard/UserCard";
import ThemeToggle from "./components/ThemeToggle";
import useFetchUser from "./lib/Hooks";
import Loading from "./components/Loading";

export default function App() {
  const [username, setUsername] = useState("octocat");
  const { data: user, loading, error } = useFetchUser(username);

  return (
    <main className="app">
      <header className="header">
        <h1>GitHub Finder</h1>
        <ThemeToggle />
      </header>

      <SearchBar onSearch={setUsername} />

      {loading && <Loading />}
      {error && <p className="status error">Error: {error}</p>}
      {user && <UserCard user={user} />}
    </main>
  );
}
