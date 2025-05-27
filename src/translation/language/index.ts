// import {data as enData } from "./en";
// import {data as ptData } from "./pt";

// const data = {
//     ...enData,
//     ...ptData,
// };
// export { data };

import { data as enData } from "./en";
import { data as ptData } from "./pt";

const data = {
  en: { translation: enData },
  pt: { translation: ptData },
};

export { data };
