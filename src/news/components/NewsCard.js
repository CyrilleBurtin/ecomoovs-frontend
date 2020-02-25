import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown } from "@fortawesome/free-solid-svg-icons";
import "./NewsCard.css";

const NewsCard = props => {
  const dateGen = insertDate => {
    let date = new Date(insertDate);
    return ` ${date.getDate()} ${new Intl.DateTimeFormat("fr-FR", {
      month: "short"
    }).format(date)} ${date.getFullYear()}`;
  };

  return (
    <>
      {props.news.map((e, i) => {
        const publishDate = dateGen(e.creationDate);
        let tags = ""
       for (const tag of e.tags) {
           tags = tags + " " + tag
        }
        return (
          <div key={i} className="NewsCards">
            <div className="col-md-5 pl-0 pr-0">
              <img src={e.image} style={{ width: "100%" }} alt='news'/>
            </div>
            <div >
              <div className="CardContent" key={i}>
                <div key={i} className="">
                  <div>
                    <div className="col-1">
                      <img
                        src="/images/monkey.jpg"
                        style={{ width: "30px" }}
                        roundedCircle
                        alt='user'
                      />
                    </div>
                    <div>
                      <p>
                        {e.author}{" "}
                        <FontAwesomeIcon icon={faCrown} color="#000" />
                      </p>
                      <p>{publishDate}</p>
                    </div>
                  </div>
                </div>
                <div>{e.title}</div>
                <div>{e.description}</div>
                <div>{e.description}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default NewsCard;
