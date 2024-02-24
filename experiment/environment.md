# environment
```
npm init --y
npm i typescript
touch tsconfig.json
mkdir src
touch src/index.ts
```

one line
```
npm init --y && npm i typescript && touch tsconfig.json && mkdir src && touch src/index.ts
```

tsconfig.json
```
{
  "compilerOptions": {
    "lib": ["ESNext"],
    "module": "CommonJS",
    "outDir": "dist", // コンパイル後に生成されるJSファイルの置き場所をTSCに指示
    "sourceMap": true,
    "strict": true,
    "target": "ES2015"
  },
  "include": ["src"] // TSCがTypeScriptファイルを見つけるためにどのディレクトリを探せば良いか？の指定
}
```

package.json
```
"scripts": {
"tsc": "tsc"
},
```

run
```
npm run tsc
```