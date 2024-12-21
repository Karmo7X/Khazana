import React from "react";
import { useTranslation } from "react-i18next";

const Notfound = () => {
      const { t, i18n } = useTranslation();
  return (
    <>
      {" "}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <h2 className="text-center mb-4">
          {" "}
          {t("global.notfoundmessage.notFound")}{" "}
        </h2>
      </div>
    </>
  );
};

export default Notfound;
