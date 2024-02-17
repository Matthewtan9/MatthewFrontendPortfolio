import React from "react";
import { useTranslation } from "react-i18next";
import '../css/Translation.css';

const languages = [
  { code: "en", langKey: "English" },
  { code: "fr", langKey: "French" },
];

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguageCode = e.target.value;
    i18n.changeLanguage(selectedLanguageCode);
  };

  return (
    <div className="select-container">
      <select
        value={i18n.language}
        onChange={changeLanguage}
      >
        {languages.map((lng) => (
          <option key={lng.code} value={lng.code}>
            {t(`languages.${lng.langKey}`)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
