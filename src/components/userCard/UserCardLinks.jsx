import {
  GitHubLogoIcon,
  TwitterLogoIcon,
  Link1Icon,
  GlobeIcon,
} from "@radix-ui/react-icons";

export default function UserCardLinks({ user }) {
  return (
    <section className="card__links" aria-label="User links and location">
      <div className="card__link-item">
        <GitHubLogoIcon aria-hidden="true" />
        {user.html_url ? (
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        ) : (
          <span className="not-available">Not Available</span>
        )}
      </div>

      <div className="card__link-item">
        <Link1Icon aria-hidden="true" />

        {user.blog ? (
          <a href={user.blog} target="_blank" rel="noopener noreferrer">
            Website
          </a>
        ) : (
          <span className="not-available">Not Available</span>
        )}
      </div>

      <div className="card__link-item">
        <TwitterLogoIcon aria-hidden="true" />
        {user.twitter_username ? (
          <a
            href={`https://twitter.com/${user.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        ) : (
          <span className="not-available">Not Available</span>
        )}
      </div>

      <div className="card__link-item">
        <GlobeIcon aria-hidden="true" />
        {user.location ? (
          <span>{user.location}</span>
        ) : (
          <span className="not-available">Not Available</span>
        )}
      </div>
    </section>
  );
}
