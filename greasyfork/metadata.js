const start = '// ==UserScript==';
const end = '// ==/UserScript==';

const base = `
// @name         [Your Script Name]
// @description  [A short description of your script]
// @author       [Your Name or Username]
// @version      [Your Script Version]
// @namespace    [Your Script Namespace or Repository URL]
// @require      [Required external libraries or resources, if any]
// @icon         [An icon URL for your script]
// @license      [Your preferred license, e.g. MIT]
// @match        [Matching URL patterns for your script to run on]
// @grant        [Required GM functions, if any]
`;

const i18n_10 = `
// @name:en      [English Script Name]
// @description:en [English Description]
// @name:zh-CN   [Simplified Chinese Script Name]
// @description:zh-CN [Simplified Chinese Description]
// @name:es      [Spanish Script Name]
// @description:es [Spanish Description]
// @name:hi      [Hindi Script Name]
// @description:hi [Hindi Description]
// @name:ar      [Arabic Script Name]
// @description:ar [Arabic Description]
// @name:pt      [Portuguese Script Name]
// @description:pt [Portuguese Description]
// @name:ru      [Russian Script Name]
// @description:ru [Russian Description]
// @name:ja      [Japanese Script Name]
// @description:ja [Japanese Description]
// @name:de      [German Script Name]
// @description:de [German Description]
// @name:fr      [French Script Name]
// @description:fr [French Description]
`;

const i18n_20 = `
// @name:id      [Indonesian Script Name]
// @description:id [Indonesian Description]
// @name:hi      [Hindi Script Name]
// @description:hi [Hindi Description]
// @name:ko      [Korean Script Name]
// @description:ko [Korean Description]
// @name:tr      [Turkish Script Name]
// @description:tr [Turkish Description]
// @name:it      [Italian Script Name]
// @description:it [Italian Description]
// @name:nl      [Dutch Script Name]
// @description:nl [Dutch Description]
// @name:pl      [Polish Script Name]
// @description:pl [Polish Description]
// @name:uk      [Ukrainian Script Name]
// @description:uk [Ukrainian Description]
// @name:ro      [Romanian Script Name]
// @description:ro [Romanian Description]
// @name:th      [Thai Script Name]
// @description:th [Thai Description]
`;

const i18n_30 = `
// @name:sv      [Swedish Script Name]
// @description:sv [Swedish Description]
// @name:hu      [Hungarian Script Name]
// @description:hu [Hungarian Description]
// @name:cs      [Czech Script Name]
// @description:cs [Czech Description]
// @name:fi      [Finnish Script Name]
// @description:fi [Finnish Description]
// @name:da      [Danish Script Name]
// @description:da [Danish Description]
// @name:bg      [Bulgarian Script Name]
// @description:bg [Bulgarian Description]
// @name:el      [Greek Script Name]
// @description:el [Greek Description]
// @name:he      [Hebrew Script Name]
// @description:he [Hebrew Description]
// @name:sk      [Slovak Script Name]
// @description:sk [Slovak Description]
// @name:sr      [Serbian Script Name]
// @description:sr [Serbian Description]
`;

const i18n_35 = `
// @name:nb      [Norwegian Bokmål Script Name]
// @description:nb [Norwegian Bokmål Description]
// @name:ka      [Georgian Script Name]
// @description:ka [Georgian Description]
// @name:vi      [Vietnamese Script Name]
// @description:vi [Vietnamese Description]
// @name:zh-TW   [Traditional Chinese Script Name]
// @description:zh-TW [Traditional Chinese Description]
// @name:eo [Esperanto Script Name]
// @description:eo [Esperanto Description]
`

const i18n = i18n_10 + i18n_20 + i18n_30 + i18n_35;

const metadata = `${start}${base}${i18n}${end}`;

export default metadata;
