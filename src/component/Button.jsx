function Button({ onSubmit, title }) {
  return (
    <div>
      <div>
        <button
          type="submit"
          className="min-w-full py-1 bg-black text-white rounded-sm"
        >
          {title}
        </button>
      </div>
    </div>
  );
}
export default Button;
