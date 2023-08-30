function FormikInput(IncomingComponent) {
  const OutgoingComponent = ({ label, id, name, ...rest }) => {
    const field = useField(name);
    const [data, meta] = field;
    const { onBlur, onChange, value } = data;
    const { touched, error } = meta;
    return (
      <IncomingComponent
        label={label}
        id={id}
        name={name}
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
        touched={touched}
      />
    );
  };

  return OutgoingComponent;
}

export default FormikInput;
