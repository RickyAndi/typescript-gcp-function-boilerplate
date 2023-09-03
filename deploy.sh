gcloud functions deploy hello \
--gen2 \
--region=us-central1 \
--runtime=nodejs20 \
--entry-point=index \
--trigger-http \
--allow-unauthenticated \
--source=./dist/hello \
--memory=128Mi \
--max-instances=2

gcloud functions deploy index \
--gen2 \
--region=us-central1 \
--runtime=nodejs20 \
--entry-point=index \
--trigger-http \
--allow-unauthenticated \
--source=./dist/index \
--memory=128Mi \
--max-instances=2