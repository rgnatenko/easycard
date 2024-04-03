interface Args {
  iconClass: string,
  pathname: string
}

type GetIconClass = (arg: Args) => string

export const getIconClass: GetIconClass = ({ iconClass, pathname }) => {
  return pathname.includes(iconClass)
    ? `icon  icon--${iconClass} icon--${iconClass}--active`
    : `icon icon--${iconClass}`;
};
