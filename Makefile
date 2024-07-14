# verify if ts-node exists using which ts-node if node npm install -g ts-node
.PHONY: ts-node
ts-node:
	@which ts-node || (echo "ts-node not found, please install it using 'npm install -g ts-node'"; exit 1)

.PHONY: install
install: ts-node
	npm install

.PHONY: run
run: install ts-node
	ts-node main.ts

## Run the server locally
.PHONY: local-server
local-server: install
	npm run dev

## Build the project and validate if there are any errors
.PHONY: build
build: install
	npm run build

## Run the linting tool and fix the errors. (Not work in the CI/CD pipeline)
.PHONY: lint
lint: install
	npx eslint . --fix

## Display help for all targets
.PHONY: help
help:
	@awk '/^.PHONY: / { \
		msg = match(lastLine, /^## /); \
			if (msg) { \
				cmd = substr($$0, 9, 100); \
				msg = substr(lastLine, 4, 1000); \
				printf "  ${GREEN}%-30s${RESET} %s\n", cmd, msg; \
			} \
	} \
	{ lastLine = $$0 }' $(MAKEFILE_LIST)
