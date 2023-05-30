import { classNameConcat } from "@eqpoqpe/classname-utils";

function App(): JSX.Element {
  const [theme, setTheme] = useState(false);

  return (
    <div className={classNameConcat("base", [theme ? "dark" : "light"])}>
    </div>
  );
}
