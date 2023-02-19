export default function Child2({closeChild2}) {
  return (
    <div
      style={{
        width: "32vw",
        background: "white",
        height: "42vh",
        borderRadius: "5px",
        border: "3px solid #ff0000",
      }}
    >
      <div
        style={{
          backgroundColor: "#171920",
          height: "10vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
        }}
      >
        <span style={{ color: "white" }}>CERTIK</span>
      </div>

      <div style={{ padding: "20px", height:"25vh" }}>
        <div style={{fontSize: '20px', fontWeight: '500'}}>Welcome to Corn Kernel Tech!</div>
        <div style={{fontSize: '18px'}}>
          Well not yet, but you're one step closer to becoming a Corntek-er and
          learning more about Corn3.
        </div>
        <br/>
        <div style={{fontSize: '18px'}}>"Provable trust for all"</div>
      </div>
      <div style={{display: 'flex', justifyContent:'center'}}>
        <span  onClick={closeChild2} style={{color: '#0ea5e9', cursor:'pointer'}}> Actually, nevermind take me back.</span>
      </div>
    </div>
  );
}
