import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddUserwishlistApi,
  GetUserwishlistApi,
  RemoveUserwishlistApi,
} from "../../Api/User/UserSlice";
const Wishlistcomponent = ({ bookid, wishlist, grid }) => {
  const [wishlistId, setWishlistId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setWishlistId(wishlist);
  }, [wishlist]);
  const handleAddwishlist = (id) => {
    const data = {
      productId: id,
    };
    dispatch(AddUserwishlistApi(data)).then((res) => {
      if (res.payload?.code === 200) {
        setWishlistId(true);
        dispatch(GetUserwishlistApi());
      }
    });
  };
  const handleRemovewishlist = (id) => {
    const data = {
      productId: id,
    };
    dispatch(RemoveUserwishlistApi(data)).then((res) => {
      if (res.payload?.code === 200) {
        setWishlistId(false);
      }
    });
  };
  return (
    <>
      {grid === false ? (
        <>
          <ul className="shop-icon d-flex justify-content-center align-items-center">
            {wishlistId !== false ? (
              <li
                style={{ background: "#FFC900" }}
                onClick={() => {
                  setWishlistId(null);
                  handleRemovewishlist(bookid);
                }}
              >
                <i className="far fa-heart"></i>
              </li>
            ) : (
              <li
                onClick={() => {
                  setWishlistId(bookid);
                  handleAddwishlist(bookid);
                }}
              >
                <i className="far fa-heart"></i>
              </li>
            )}
            {/* <li><a href="/Cart"><img className="icon" src="assets/img/icon/shuffle.svg" alt="Shuffle icon" /></a></li> */}
            <li>
              <a href={`/Single/${bookid}`}>
                <i className="far fa-eye"></i>
              </a>
            </li>
          </ul>
        </>
      ) : grid === "single" ? (
        <>
          <div class="icon-box">
            {wishlistId !== false ? (
              <a
                style={{ background: "#FFC900" }}
                onClick={() => {
                  setWishlistId(null);
                  handleRemovewishlist(bookid);
                }}
                class="icon"
              >
                <i class="far fa-heart"></i>
              </a>
            ) : (
              <a
              style={{ background: "#000" }}
                onClick={() => {
                  setWishlistId(bookid);
                  handleAddwishlist(bookid);
                }}
                class="icon"
              >
                <i class="far fa-heart"></i>
              </a>
            )}

            {/* <a href="/Single/:id" class="icon-2">
                                <img
                                  src="/assets/img/icon/shuffle.svg"
                                  alt="svg-icon"
                                />
                              </a> */}
          </div>
        </>
      ) : (
        <>
          <ul className="shop-icon d-grid justify-content-center align-items-center">
            {wishlistId !== false ? (
              <li
                style={{ background: "#FFC900" }}
                onClick={() => {
                  setWishlistId(null);
                  handleRemovewishlist(bookid);
                }}
              >
                <i className="far fa-heart"></i>
              </li>
            ) : (
              <li
                onClick={() => {
                  setWishlistId(bookid);
                  handleAddwishlist(bookid);
                }}
              >
                <i className="far fa-heart"></i>
              </li>
            )}

            {/* <li>
                            <a href="/Cart">
                                <img className="icon" src="assets/img/icon/shuffle.svg" alt="Shuffle Icon" />
                            </a>
                        </li> */}
            <li>
              <a href={`/Single/${bookid}`}>
                <i className="far fa-eye"></i>
              </a>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default Wishlistcomponent;
