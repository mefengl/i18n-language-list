```js
const start = '// ==UserScript==';
const end = '// ==/UserScript==';

const base = `
// @name         [Your Script Name]
// @description  [A short description of your script]
// @author       [Your Name or Username]
// @version      [Your Script Version]
// @namespace    [Your Script Namespace or Repository URL]
// @icon         [An icon URL for your script]
// @license      [Your preferred license, e.g. MIT]
// @match        [Matching URL patterns for your script to run on]
// @grant        [Required GM functions, if any]
`;

const i18n = `
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

const metadata = `${start}${base}${i18n}${end}`;

export default metadata;
```

next I will give you many base metadata, you need to compelete above template code, if you understand, reply YES
