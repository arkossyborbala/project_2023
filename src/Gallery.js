import Profile from './Profile.js'

export default function Gallery({pictureCount}) {
  const profiles = []
  for (let i = 0; i < pictureCount; i++) {
    profiles.push(<Profile/>)
  }
  return (
    <section>
      <h1>Amazing scientists</h1>
      {profiles}
    </section>
  );
}
