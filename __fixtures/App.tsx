import { classListConcat } from "classname-utils";

function App(): JSX.Element {
  const [theme, setTheme] = useState(false);

  return (
    <div className={classListConcat("base", [theme ? "dark" : "light"])}>
    </div>
  );
}
