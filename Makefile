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
