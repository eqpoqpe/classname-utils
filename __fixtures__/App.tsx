import { classNameConcat } from "@eqpoqpe/classname-utils";

function App(): JSX.Element {
  const [theme, setTheme] = useState(false);

  return (
    <div className={classNameConcat([theme ? "dark" : "light", () => "flex"])}>
    </div>
  );
}
