main.jsx: tmp.js
	npx babel $< --out-file $@

.INTERMEDIATE: tmp.js
tmp.js: main.js
	npx browserify $< --outfile $@

clean:
	rm -f main.jsx
