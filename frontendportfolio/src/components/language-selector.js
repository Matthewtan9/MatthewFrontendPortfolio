import React from "react";
import { useTranslation } from "react-i18next";
import '../css/Translation.css';

const languages = [
  { code: "en", langKey: "English" },
  { code: "fr", langKey: "French" },
];

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng.code);
  };

  return (
    <div className="btn-container">
      {languages.map((lng) => (
        <button
          className={lng.code === i18n.language ? "selected" : ""}
          key={lng.code}
          onClick={() => changeLanguage(lng)}
        >
          {t(`languages.${lng.langKey}`)}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
