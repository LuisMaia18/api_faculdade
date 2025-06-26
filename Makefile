# MakeFile para compilar e executar o programa

.PHONY: commit

# target: commit - Executa 'git add .', 'git commit -a', 'git push'
commit:
	@echo "Committing to git"
	git add .
	git commit -a
	git push github main

.PHONY: run_dev

run_dev:
	 npx concurrently "cd api_faculdade && npm start" "cd carros-frontend/carros-frontend && PORT=3001 npm start"

push:
	@echo "Pushing to git"
	git push github main