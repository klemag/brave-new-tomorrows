serve:
	yarn serve

build:
	yarn build

install_deps:
	yarn install

lint:
	yarn lint

deploy:
	yarn build
	cp CNAME dist/
	git subtree push --prefix dist origin gh-pages
