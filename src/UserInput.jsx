export default function UserInput() {
  const userInputArray = [[], [], [], []];
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input type="number" />
        </p>
        <p>
          <label>Annual investment</label>
          <input type="number" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input type="number" step="0.01" />
        </p>
        <p>
          <label>Duration</label>
          <input type="number" />
        </p>
      </div>
    </section>
  );
}
