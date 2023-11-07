const MyAssignmentCard = ({ assignment }) => {
  console.log(assignment);
  return (
    <div>
      <div>
        <img src={assignment?.image} alt="" />
      </div>
    </div>
  );
};

export default MyAssignmentCard;
