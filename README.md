# nassi-shneiderman-diagram-builder-online

This project is a successor to my [Nassi-Shneiderman Diagram Builder](https://github.com/Eurydia/nassi-shneiderman-diagram-builder).

It is a web application that allows you to create Nassi-Shneiderman diagrams using C-style code.

It features two main components; the editor and the preview.
Unfortunately, there is no native ways to capture and download HTML nodes as images so users are advised to use a screenshot tool to capture the preview.

## Implementation

The project is written in TypeScript and uses React with UI components from Material-UI.

The editor is implemented using [CodeMirror](https://codemirror.net/) to provide better syntax highlighting and code editing experience than Mui's TextField with multiline enabled.

The lexer and parser can be found in `src/ast/lexer.ts` and `src/ast/parser.ts` respectively.

### Lexer

The lexer is a very simple one that only supports a subset of C-style syntax.
It can detect the following tokens:

- Keywords: `if`, `else`, `while`, `for`, `do`
- Literal tokens: `(`, `)`, `{`, `}`, `;`
- Symbols: everything else

### Parser

The parser is a recursive descent parser that parses the tokens generated by the lexer.

It can geenrate the following AST nodes:

- `for` loops,
- `while` loops,
- `do-while` loops,
- `if` statements,
- `if-else` statements,

## Devleopment notes

## Resources

- Nassi–Shneiderman diagram (Wikipedia): https://en.wikipedia.org/wiki/Nassi%E2%80%93Shneiderman_diagram
