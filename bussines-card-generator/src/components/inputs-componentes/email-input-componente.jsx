export function InputEmail({ email, setEmail }) {
  return (
    <div>
      <label
        htmlFor="inputEmail"
        name="websiteEmail"
        id="emailLabel"
        className="inputLabel"
      >
        Email:{" "}
      </label>
      <input
        type="text"
        id="inputEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
