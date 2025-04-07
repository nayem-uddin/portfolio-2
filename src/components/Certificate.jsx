export const Certificate = ({ image, title }) => {
  return (
    <div className="cert">
      <img src={image} className="d-block" alt={title} />
    </div>
  );
};
