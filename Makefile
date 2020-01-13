dev:
	npm run dev
	@echo "Open http://localhost:4848"

deploy:
	cd terraform && terraform apply

deploy-plan:
	cd terraform && terraform plan
