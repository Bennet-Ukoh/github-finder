export default function UserCardHeader({ user }) {
  return (
    <header className="card__header">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="card__avatar"
      />
      <div className="card__info">
        <div className="card__name">
          <h2>{user.name || user.login}</h2>
          <p>@{user.login}</p>
        </div>
        <p>
          Joined{" "}
          <time dateTime={user.created_at}>
            {new Date(user.created_at).toLocaleDateString()}
          </time>
        </p>
      </div>
    </header>
  );
}
