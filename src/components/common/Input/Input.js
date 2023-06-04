const Input = ({ value, onChange }) => (
  <input value={value} onChange={(e) => onChange(e.target.value)} />
);

export default Input;
