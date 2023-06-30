
/* eslint-disable-next-line */
export interface MainProps {
  className?:string
}

export function Main({className = ''}: MainProps) {
  return (
    <main className={`${className}`}>
      <h1>Welcome to Main!</h1>
    </main>
  );
}

export default Main;
