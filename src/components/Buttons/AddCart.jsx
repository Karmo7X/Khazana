import React from 'react'

const AddCart = ({productid}) => {
  return (
    <>
        <div className="shop-button">
                            <a href={`/Single/${book?.id}`}  className="theme-btn">
                                <i className="fa-solid fa-basket-shopping"></i> {t("global.add_to_cart")}
                            </a>
                        </div>
    </>
  )
}

export default AddCart