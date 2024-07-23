.PHONY: up
up:
	yarn run dev

.PHONY: build
build:
	yarn

.PHONY: build
build-dist:
	yarn --frozen-lockfile && yarn run build
