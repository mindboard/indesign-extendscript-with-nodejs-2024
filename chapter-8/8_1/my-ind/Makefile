all: my-ind.jsxbin main.jsx

my-ind.jsxbin: tmp.jsx
	npx jsxbin --input $< --output $@

.INTERMEDIATE: tmp.jsx
tmp.jsx: tmp.js
	npx babel $< --out-file $@

main.jsx: tmp.js
	npx babel $< --out-file $@

.INTERMEDIATE: tmp.js
tmp.js: main.js
	npx browserify $< --outfile $@

clean:
	rm -f my-ind.jsxbin
	rm -f main.jsx
