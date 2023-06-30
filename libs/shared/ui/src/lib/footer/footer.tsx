
/* eslint-disable-next-line */
export interface FooterProps {
  className?:string
}

export function Footer({className = ''}: FooterProps) {
  return (
    <div className={`${className}`}>
      <h1>Welcome to Footer!</h1>
    </div>
  );
}

export default Footer;
