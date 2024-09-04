const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <label className="form-control">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </label>
  );
};

export default FormInput;
