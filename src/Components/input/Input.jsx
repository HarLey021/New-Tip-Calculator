import "./Input.css";

export default function Input({
  handlerFunc,
  value,
  showError,
  className,
  name,
  logo,
  placeholder,
  label,
  alt,
}) {
  return (
    <div>
      <div className="name-and-error-container">
        <h1>{name}</h1>
        <p className="error">{showError ? "Can't be zero" : ""}</p>
      </div>
      <img className="input-logo" src={logo} alt={alt} />
      <input
        onChange={handlerFunc}
        value={value}
        className={`${className} ${showError ? "error-border" : ""}`}
        type="number"
        label={label}
        placeholder={placeholder}
      />
    </div>
  );
}
