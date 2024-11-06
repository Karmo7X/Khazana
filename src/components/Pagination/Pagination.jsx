import React from 'react'

const Pagination = () => {
  return (
    <>
     <div className="page-nav-wrap text-center">
                            <ul>
                                <li><a className="previous" href="shop.html">Previous</a></li>
                                <li><a className="page-numbers" href="shop.html">1</a></li>
                                <li><a className="page-numbers" href="shop.html">2</a></li>
                                <li><a className="page-numbers" href="shop.html">3</a></li>
                                <li><a className="page-numbers" href="shop.html">...</a></li>
                                <li><a className="next" href="shop.html">Next</a></li>
                            </ul>
                        </div>
    </>
  )
}

export default Pagination