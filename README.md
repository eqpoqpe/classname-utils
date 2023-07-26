# ClassName Utils

**classNameConcat** is a versatile utility function designed to concatenate class names in TypeScript. This function takes an array of class names, including special identifiers known as inheritBaseClassName, strings, and optional undefined values. It efficiently merges these class names, handling various cases and ensuring a clean and consistent output.

## Usage Example

```ts
import { classNameConcat } from "@eqpoqpe/classname-utils";

const classNames = [
  "header",
  "nav-item",
  inheritBaseClassName,
  undefined,
  "footer",
];

const concatenatedClasses = classNameConcat(classNames);
console.log(concatenatedClasses); // Output: 'header nav-item footer'
```

## Contributing

We welcome contributions to enhance the functionality and usability of this utility. Feel free to submit issues for bug reports or feature requests, and create pull requests to suggest improvements or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## Acknowledgments

We would like to express our gratitude to the open-source community and the contributors who have made this utility possible. Their efforts enable developers worldwide to simplify class name concatenation and improve their TypeScript projects.
