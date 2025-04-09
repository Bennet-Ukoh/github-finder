export default function UserCardBio({ user }) {
  return <p className="user__bio">{user.bio || "This user has no bio."}</p>;
}
