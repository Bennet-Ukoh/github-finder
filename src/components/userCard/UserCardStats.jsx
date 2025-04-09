export default function UserCardStats({ user }) {
  return (
    <section
      className="card__stats"
      aria-label="User statistics: Repos, Followers, Following"
    >
      <div className="card__stats-item">
        <p>Repos</p>
        <p>{user.public_repos}</p>
      </div>
      <div className="card__stats-item">
        <p>Followers</p>
        <p>{user.followers}</p>
      </div>
      <div className="card__stats-item">
        <p>Following</p>
        <p>{user.following}</p>
      </div>
    </section>
  );
}
