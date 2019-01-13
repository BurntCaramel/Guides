dev:
	yarn dev

deploy:
	cd terraform && terraform apply

deploy-plan:
	cd terraform && terraform plan
