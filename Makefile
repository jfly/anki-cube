.DEFAULT_GOAL := bootstrap

# ------------ Bootstrapping -----------------
.PHONY: bootstrap
bootstrap: .bootstrapped install-py-deps

.bootstrapped:
	mkdir .bootstrapped

bootstrapped_py_deps_file = .bootstrapped/py-deps
.PHONY: install-py-deps
install-py-deps: $(bootstrapped_py_deps_file)
$(bootstrapped_py_deps_file): Pipfile.lock
	pipenv install --dev
	touch $(bootstrapped_py_deps_file)
# --------------------------------------------

.PHONY: decks
decks: bootstrap
	python main.py

clean:
	rm -rf .bootstrapped
	rm -rf out
