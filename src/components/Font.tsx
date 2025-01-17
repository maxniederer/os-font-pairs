interface Font {
  name: string;
  class: string;
  src: {
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    var?: string;
  };
  credit: {
    author: string;
    foundry: string;
    link: string;
    license: string;
    licenseLink: string;
  };
  tags: string[];
}

export default Font;
