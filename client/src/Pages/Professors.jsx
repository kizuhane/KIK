import React, { useEffect } from "react";
import PropTypes from "prop-types";

/* import:: components */
import ProfessorBox from "../components/ProfessorsContent/ProfessorBox";

/* import:: CONSTANT */
import { hashLinkScroll } from "../function/hashLinkScroll";

import ProfessorsList from "../components/test-comp/PROFESSORS_LIST";

const ProfessorsPage = props => {
  const { history } = props;
  /** @description jump do id from hash from link */
  useEffect(() => {
    hashLinkScroll(history.location.hash);
  });

  console.log("ProfessorsPage", props);
  console.log("ProfessorsPage", ProfessorsList);

  console.log(ProfessorsList[0]);

  return (
    <div>
      {ProfessorsList.map(professor => (
        <ProfessorBox
          key={professor.id}
          name={`${professor.name} ${professor.surname}`}
          titles={professor.titles}
          photo={professor.photo}
          department={professor.department}
          contactInfo={professor.contactInfo}
          orcid={professor.ORCID}
        />
      ))}
    </div>
  );
};

/*
<ProfessorsList
            key={data.text}
            name={data.text}
            show={ShowAllSections.showAll}
          >
            {data.content.map((content, index) =>
              sectionsBody(content.type, content.data, index)
            )}
          </ProfessorsList>
*/

ProfessorsPage.propTypes = {
  history: PropTypes.shape({
    length: PropTypes.number,
    action: PropTypes.string,
    location: PropTypes.object,
    createHref: PropTypes.func,
    push: PropTypes.func,
    replace: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    block: PropTypes.func,
    listen: PropTypes.func
  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object
  }).isRequired
};

export default ProfessorsPage;
