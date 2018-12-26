aws-sync:
	echo 'Running AWS Sync'
	aws s3 sync . s3://cloudbuilder.in/tools/ --exclude "Makefile" --exclude ".git/*"
aws-dryrun:
	echo 'Running AWS Dry Run'
	aws s3 sync . s3://cloudbuilder.in/tools/ --dryrun --exclude "Makefile" --exclude ".git/*"
