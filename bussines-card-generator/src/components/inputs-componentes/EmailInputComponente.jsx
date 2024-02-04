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
        maxLength={35}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
}
