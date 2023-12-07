all: old-macs.jsxbin main.jsx

old-macs.jsxbin: tmp.jsx
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
	rm -f old-macs.jsxbin
	rm -f main.jsx
