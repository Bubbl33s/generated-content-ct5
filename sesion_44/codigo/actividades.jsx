// Actividad 1: Me gusta / No me gusta
function MeGusta() {
  const [like, setLike] = useState('💖');

  const toggleLike = () => {
    setLike(like === '💖' ? '🖤' : '💖');
  };

  return (
    <div className="me-gusta">
      <h3>Click para cambiar</h3>
      <span onClick={toggleLike} style={{fontSize: '2rem', cursor: 'pointer'}}>
        {like}
      </span>
    </div>
  );
}

// Actividad 2: Mood Tracker
function MoodTracker() {
  const [mood, setMood] = useState('😊');

  return (
    <div className="mood-tracker">
      <h3>Mi estado de ánimo: {mood}</h3>
      <button onClick={() => setMood('😊')}>Feliz</button>
      <button onClick={() => setMood('😌')}>Tranquila</button>
      <button onClick={() => setMood('😴')}>Cansada</button>
    </div>
  );
}

// Actividad 3: Contador de Likes
function Post() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="post">
      <img src="https://placekitten.com/300/300" alt="Gatito" />
      <div className="likes">
        <span onClick={() => setLikes(likes + 1)}>❤️ {likes}</span>
      </div>
    </div>
  );
}

// Mini Proyecto: Instagram Card
function InstagramCard() {
  const [likes, setLikes] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="instagram-card">
      <img src="https://placekitten.com/400/400" alt="Post" />
      <div className="actions">
        <span onClick={() => setLikes(likes + 1)}>❤️ {likes}</span>
        <span onClick={() => setIsSaved(!isSaved)}>
          {isSaved ? '📥' : '📤'}
        </span>
      </div>
    </div>
  );
}