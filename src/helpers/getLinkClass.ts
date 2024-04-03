interface Args {
  isActive: boolean,
  defaultClass: string
}

const getLinkClass = ({ isActive, defaultClass }: Args) => {
  return isActive ? `${defaultClass} ${defaultClass}--active` : defaultClass;
};

export default getLinkClass;
