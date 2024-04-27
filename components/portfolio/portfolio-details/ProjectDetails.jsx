const ProjectDetails = ({ details }) => {
  if (!details || !details.projectInfo) {
    return null; // or a message indicating that there are no project details
  }

  return (
    <>
      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">Date</div>
        <div className="pt-text">{details.projectInfo.date}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Client Name
        </div>
        <div className="pt-text">{details.projectInfo.clientName}</div>
      </div>
      {/* End .col-12 */}

      <div className="col-12 mb-35">
        <div className="pt-title fw-bold tx-dark text-uppercase">
          Project Type
        </div>
        <div className="pt-text">{details.projectInfo.projectType}</div>
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default ProjectDetails;
