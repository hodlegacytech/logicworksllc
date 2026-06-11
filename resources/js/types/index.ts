export interface NavDropdownItem {
  label: string;
  href: string;
  desc?: string;
}

export interface NavMegaColumn {
  heading: string;
  items: NavDropdownItem[];
}

export interface NavMegaDropdown {
  type: 'mega';
  title: string;
  columns: NavMegaColumn[];
}

export interface NavSimpleDropdown {
  type: 'simple';
  items: NavDropdownItem[];
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavMegaDropdown | NavSimpleDropdown;
}

export interface PageTemplateProps {
  title: string;
  subtitle: string;
  label: string;
  heroColor?: string;
}
