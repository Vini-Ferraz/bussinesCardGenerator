export function InputWebsite({ website, setWebsite }) {
  return (
    <div>
      <label htmlFor="inputWebsite" name="websiteLabel" id="websiteLabel">
        Website:{" "}
      </label>
      <input
        type="text"
        id="inputWebsite"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />
    </div>
  );
}
