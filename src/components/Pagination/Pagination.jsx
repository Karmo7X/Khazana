import React from 'react'

const Pagination = () => {
  return (
    <>
     <div className="page-nav-wrap text-center">
                            <ul>
                                <li><a className="previous" href="Shop">Previous</a></li>
                                <li><a className="page-numbers" href="Shop">1</a></li>
                                <li><a className="page-numbers" href="Shop">2</a></li>
                                <li><a className="page-numbers" href="Shop">3</a></li>
                                <li><a className="page-numbers" href="Shop">...</a></li>
                                <li><a className="next" href="Shop">Next</a></li>
                            </ul>
                        </div>
    </>
  )
}

export default Pagination