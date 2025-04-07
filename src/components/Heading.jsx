export const Heading = ({ headline }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center fw-medium display-2 headline">{headline}</h2>
      <hr style={{ width: "50%", margin: "auto" }} />
    </div>
  );
};
