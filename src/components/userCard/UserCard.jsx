import UserCardBio from "./UserCardBio";
import UserCardHeader from "./UserCardHeader";
import UserCardLinks from "./UserCardLinks";
import UserCardStats from "./UserCardStats";

export default function UserCard({ user }) {
  return (
    <article className="card" aria-label={`GitHub profile for ${user.login}`}>
      <UserCardHeader user={user} />
      <UserCardBio user={user} />
      <UserCardStats user={user} />
      <UserCardLinks user={user} />
    </article>
  );
}
