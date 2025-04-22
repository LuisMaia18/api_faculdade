# MakeFile para compilar e executar o programa

.PHONY: commit

# target: commit - Executa 'git add .', 'git commit -a', 'git push'
commit:
	@echo "Committing to git"
	git add .
	git commit -a
	git push github lm