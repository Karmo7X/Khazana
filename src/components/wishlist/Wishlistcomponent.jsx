import React from 'react'

const Wishlistcomponent = ({bookid}) => {

  return (
    <>
    <ul className="shop-icon d-grid justify-content-center align-items-center">
                        <li>
                            <a href="/Cart"><i className="far fa-heart"></i></a>
                        </li>
                        {/* <li>
                            <a href="/Cart">
                                <img className="icon" src="assets/img/icon/shuffle.svg" alt="Shuffle Icon" />
                            </a>
                        </li> */}
                        <li>
                            <a href={`/Single/${bookid}`}><i className="far fa-eye"></i></a>
                        </li>
                    </ul>
    </>
  )
}

export default Wishlistcomponent