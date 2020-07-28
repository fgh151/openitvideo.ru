import React from "react";
import {Link} from "gatsby"

const pagination = (context) => {

    console.log(context.context.pagesSum)

    const items = []

    for (let i = 1; i < context.context.pagesSum; i++) {

        let cssClass = 'page-item';
        if (i === context.context.page) {
            cssClass = cssClass+' active';
        }

        items.push(<li className={cssClass} key={i}>
            <Link className="page-link" to={'/page/'+i}>{i}</Link>
        </li>)
    }

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" to={context.context.prevPath}>Предыдущая</Link>
                </li>
                {items}
                <li className="page-item">
                    <Link className="page-link" to={context.context.nextPath}>Следующая</Link>
                </li>
            </ul>
        </nav>
    )

}

export default pagination;