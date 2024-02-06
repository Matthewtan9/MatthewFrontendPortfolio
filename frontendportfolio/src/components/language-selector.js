import React from "react";
import { useTranslation } from "react-i18next";
import '../css/Translation.css' 


const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="btn-container">
            {languages.map((lng) => (
                <button
                    className={lng.code === i18n.language ? "selected" : ""}
                    key={lng.code}
                    onClick={() => changeLanguage(lng.code)} // Use lng.code instead of lng.lang
                >
                    {lng.lang}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
