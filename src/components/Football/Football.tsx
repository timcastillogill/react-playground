import React from "react";
import useFootballInfo from "../../Hooks/useFootballInfo";

const Football = () => {
  const { isLoading, hasError, data } = useFootballInfo();

  const getFootballCompInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    return data;
  };

  return (
    <section>
      <button className="ui-button" onClick={getFootballCompInfo}>
        Get Info
      </button>
      {hasError && (
        <h3>Something hasn't gone to plan. Please click the button again</h3>
      )}
      {isLoading && !hasError && <h2>Loading...</h2>}
      {!hasError && !isLoading && (
        <table>
          <tbody>
            <tr>
              <th>Debut</th>
              <th>Team Name</th>
            </tr>
            <tr>
              <td>{data.debut}</td>
              <td>{data.name}</td>
            </tr>
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Football;
