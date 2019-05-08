dev:
	yarn dev
	@echo "Open http://localhost:8080"

deploy:
	cd terraform && terraform apply

deploy-plan:
	cd terraform && terraform plan
