export default function Child3({ closeChild3 }) {
  return (
    <div
      style={{
        width: "32vw",
        background: "#0ea5e9",
        height: "42vh",
        borderRadius: "5px",
        padding: "20px",
        color: "white",
      }}
    >
      <div style={{ height: "30vh" }}>
        <div> It took you 6.35 seconds to say no?</div>
        <br />
        <div>
          Well, you worked, had a happy family, went on vacatoins, and died
          surrounded by everyone you love in your fake "reality"...
        </div>
        <br />
        <span> Wait, that doesn't sound so bad?</span>
        <br />
        But there's a lingering uneasiness...
      </div>
      <div>
        <button
          style={{
            width: "100%",
            borderRadius: "1rem",
            padding: "10px",
            backgroundColor: "white",
            color: "black",
          }}
          onClick={closeChild3}
        >
          I'm unsatisfied, let's try again
        </button>
      </div>
    </div>
  );
}
