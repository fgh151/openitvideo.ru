import React from "react"
import {Link, StaticQuery, graphql} from "gatsby"

import {colors} from "../utils/vars"

const navItem = `
    display: flex;
    align-items: center;
    margin: 0 1em 0 2em;
    padding: 0.5em 0;
    border-bottom: 0.05em solid ${colors.mainHalf};
    postion: relative;
    color: ${colors.textBody};
    text-decoration: none;

    &:before {
      content: '';
      transition: 0.5s;
      width: 0.5em;
      height: 0.5em;
      position: absolute;
      left: 0.8em;
      border-radius: 50%;
      display: block;
      background-color: ${colors.main};
      transform: scale(0);
    }

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      &:before {
        transform: scale(1);
      }
    }
  `

export default () => (
    <StaticQuery
        query={graphql`{allVideosJson{distinct(field: tags)}}`}
        render={({allVideosJson: {distinct}}) => (
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    {
                        distinct.map((tag) => (
                            <li className="nav-item" key={tag}>
                                <Link className="nav-link active" to={'/tag/' + tag} css={navItem}>{tag}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )}
    />
)