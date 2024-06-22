export const Mailbox = () => {
  return (
    <div>
      {[1, 2, 3].map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
};

export default Mailbox;
